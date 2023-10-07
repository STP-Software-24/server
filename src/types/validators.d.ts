export interface Validator {
    regex: RegExp;
    message: string;
    optional?: boolean;
}

export interface ValidatorObject {
    [key: string]: Validator;
}

export interface fields {
    [key: string]: any;
}
