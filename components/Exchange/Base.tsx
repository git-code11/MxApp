

export interface ViewSectionProps{
    current:number,
    onNext?:()=>void,
    onPrev?:()=>void,
    onPreview?:()=>void,
    //[i:string]:any//to absolve other props
}