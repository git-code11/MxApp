import NextLink from "next/link";

import MuiLink,{LinkProps} from "@mui/material/Link";


const Link = ({href, children, sx}:{href?:string, children?:LinkProps["children"], sx?:LinkProps["sx"]})=>
    <MuiLink href={href??"#"} component={NextLink} sx={sx}>{children}</MuiLink>
;

export default Link;