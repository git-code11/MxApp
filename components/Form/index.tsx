import { useCallback, useEffect, useRef, useState } from "react";
import {useForm as h_useForm, FormProvider as H_FormProvider, useFormContext as h_useFormContext,
    useController as h_useController, useWatch as h_useWatch} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Autocomplete from "@mui/material/Autocomplete";


interface FormProviderProps{
    children:JSX.Element,
    schema?:any,
    defaultValues?:any
    formProps?:any
}

const FormProvider = ({children, schema, formProps, defaultValues}:FormProviderProps)=>{
    const methods = h_useForm({resolver: schema?yupResolver(schema):schema,defaultValues});

    return (
        <H_FormProvider {...methods}>
            <form {...formProps}>
                {children}
            </form>
        </H_FormProvider>
    );
}

const useForm = h_useFormContext;
const useWatch = h_useWatch;

interface FormActionProps{
    label:any,
    action:Function,
    failed?:Function
}

interface ActionComponentProps{
    disabled:boolean,
    onClick:Function,
    label:any,
    [key:string]:any
}


const FormAction = (ActionComponent:React.FC<ActionComponentProps>)=>({label, action, failed, ...moreProps}:FormActionProps)=>{

    const {handleSubmit, formState:{errors}} = useForm();
    const hasError = Object.keys(errors).length>0;
    
    const onSubmitTask = useCallback(()=>handleSubmit(action as any, failed as any)(),[handleSubmit]);

    return (
        <ActionComponent disabled={hasError} onClick={onSubmitTask} label={label} {...moreProps}/>
    );
}

interface FormInputProps{
    name:string,
    rules?:Object,
    control?:any,
    [key:string]:any
}


const FormInput = (InputComponent:React.FC<any>)=>({name, rules, control, ...moreProps}:FormInputProps)=>{
    const controller = h_useController({name, control, rules:rules??{}});
    const error = controller.formState.errors[name];


    return (
        <InputComponent {...{...moreProps, name, error, 
            onChange:controller.field.onChange,
            onBlur:controller.field.onBlur,
            value:controller.field.value??"",
            inputRef:controller.field.ref,
        }}/>
    );
    
}

const getBlobURL = (file:File)=>URL.createObjectURL(file);

const releaseBlob = (url:any)=>URL.revokeObjectURL(url);


const imageValidate = (name:string, file:any, setError:any, rules:any)=>{
    if(rules){
        if(rules.required && !file)
            return setError(name, {type:"required", message:"required"}) && false;
        else if(rules.max && (rules.max * 1024 < file.size))
            return setError(name, {type:"max", message:`file size: ${(file.size/1024).toFixed(2)}kb > ${(rules.max).toFixed(2)}kb`}) && false;
    }

    return true;
}

interface FormImageProps{
    name:string,
    accept?:string,
    rules?:any,
    control?:any,
    [key:string]:any
}

const FormImage = (ImageComponent:React.FC<any>)=>({name, rules, control, accept, ...moreProps}:FormImageProps)=>{
    const {register, setValue, setError, formState, clearErrors} = h_useFormContext();
    const uploadRef = useRef<any>();

    register(name,{required:true});
    
    const error = formState.errors[name];
    const value  = h_useWatch({name});

    const onChange = useCallback((e:any)=>{
        const file = e.target.files[0];
        releaseBlob(value??"");
        const valid = imageValidate(name, file, setError, rules);
        if(valid)   
            clearErrors(name);
        setValue(name, (file && valid)?getBlobURL(file):"");
    },[name, setValue, setError, rules]);

    const upload = useCallback(()=>uploadRef?.current?.click(),[uploadRef]);

    return (
        <>
            <input ref={uploadRef} hidden accept={accept??"image/*"} type="file" onChange={onChange}/>
            <input hidden readOnly {...{value:value??"", name}}/>
            <ImageComponent {...{...moreProps, name, value, error, upload}} files={uploadRef.current?.files}/>
        </>
    );
    
}

interface ComboBoxProps{
    name:string,
    label:string,
    options:any,
    autoCompleteProps?:any,
    [key:string]:any
}

const ComboBox = (InputComponent:React.FC<any>)=>(props:ComboBoxProps)=>{
    const {name, options, autoCompleteProps, ...moreProps} = props;
    const {register, setValue, trigger, formState} = useForm();
    register(name);

    const value = h_useWatch({name});
    const error = formState.errors[name];

    const onChange = useCallback((e:any,data:any)=>{
        setValue(name, data?.value??data??"");
        trigger(name);
    },[trigger, name]);



    return (
        <Autocomplete
            {...(autoCompleteProps??{})}
            {...{name, options, onChange}}
            value={value??""}
            fullWidth
            renderInput={(params)=><InputComponent
                                        {...moreProps}
                                        {...{name, error, value}}
                                        renderInputProps={params}
                                        />}            
        />
    );
}


interface RefInputProps{
    name:string,
    refName:string,
    onRefChange:any,
    [key:string]:any
}
const FormRefInput = (InputComponent:React.FC<any>)=>(props:RefInputProps)=>{
    const {name, refName, onRefChange, ...moreProps} = props;
    const {setValue} = useForm();
    const refValue = h_useWatch({name:refName});
    const [cbData, cb] = useState();
    
    useEffect(()=>{
        setValue(name,"");
        onRefChange(refValue, cb);
    },[refValue, name]);

    return (
        <InputComponent name={name} {...moreProps} cbData={cbData}/>
    );
}


export default FormProvider;
export {useForm, useWatch, FormAction, FormInput, FormImage, FormRefInput,ComboBox};