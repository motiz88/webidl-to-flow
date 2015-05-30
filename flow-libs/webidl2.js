type IdlType = {
    sequence: boolean,
    generic: ? string,
    nullable : boolean,
    array: boolean | number,
    union: boolean,
    idlType: string | Array < string > | IdlType | Array < IdlType > ,
    nullableArray: ?Array<boolean>,
};

type IdlInterface = {
    "type": string, // always "interface"
    name: string,
    partial: boolean,
    members: Array < IdlInterfaceMember > ,
    inheritance: ? string,
    extAttrs : Array < IdlExtAttr > ,
};

type IdlCallbackInterface = IdlInterface; // with type="callback interface"

type IdlCallback = {
    "type": string, // always "callback"
    name: string,
    idlType: IdlType,
    arguments: Array < IdlArgument > ,
    extAttrs: Array < IdlExtAttr > ,
};

type IdlDictionary = {
    "type": string, // always "dictionary"
    name: string,
    partial: boolean,
    members: Array < IdlDictionaryField > ,
    inheritance: ? string,
    extAttrs : Array < IdlExtAttr > ,
};

type IdlDictionaryField = {
    "type": string, // always "field"
    name: string,
    required: boolean,
    idlType: IdlType,
    extAttrs: Array < IdlExtAttr > ,
    default: ? IdlDefaultValue,
};

type IdlExceptionField = {
    "type": string, // always "field"
    name: string,
    idlType: IdlType,
    extAttrs: Array < IdlExtAttr > ,
};

type IdlOperation = {
    "type": string, // always "operation"
    getter: boolean,
    setter: boolean,
    creator: boolean,
    deleter: boolean,
    legacycaller: boolean,
    "static": boolean,
    stringifier: boolean,
    idlType: ? IdlType,
    name : ? String,
    arguments : Array < IdlArgument > ,
    extAttrs: Array < IdlExtAttr >
}

type IdlExceptionMember = IdlExceptionField | IdlConstant | IdlOperation /* could be a constructor from preprocessAst */;

type IdlException = {
    "type": string, // always "exception"
    name: string,
    members: Array < IdlExceptionMember > ,
    inheritance: ? string,
    extAttrs : Array < IdlExtAttr > ,
};

type IdlEnum = {
    "type": string, // always "enum"
    name: string,
    values: Array < string > ,
    extAttrs: Array < IdlExtAttr >
}

type IdlTypedef = {
    "type": string, // always "enum"
    name: string,
    idlType: IdlType,
    extAttrs: Array < IdlExtAttr > ,
    typeExtAttrs: Array < IdlExtAttr >
}

type IdlImplements = {
    "type": string, // always "implements"
    target: string,
    "implements": string,
    extAttrs: Array < IdlExtAttr >
}

type IdlAttribute = {
    "type": string, // always "attribute"
    "static": boolean,
    stringifier: boolean,
    inherit: boolean,
    idlType: IdlType,
    name: ? String,
    extAttrs : Array < IdlExtAttr > ,
}

type IdlExtAttr = {
    name: string,
    arguments: ? Array < IdlArgument > ,
    rhs : ? {
        "type": string,
        value: string
    },
    typePair : ? {
        key: $FixMe,
        value: $FixMe
    },
};

type IdlConstant = {
    "type": string, // always "const",
    nullable: boolean,
    idlType: IdlType,
    name: string,
    value: IdlConstantValue,
    extAttrs: Array < IdlExtAttr >
};

type IdlSerializer = {
    "type": string, // always "serializer",
    extAttrs: Array < IdlExtAttr > ,

    // for a simple serializer
    idlType: ? IdlType,
    operation : ? {
        name: string,
        arguments: Array < IdlArgument >
    },

    patternMap : ? boolean,
    patternList : ? boolean,
    names : ? Array < string > ,

    name : ? string,
};

type IdlIterator = {
    "type": string, // always "iterator"
    getter: boolean,
    setter: boolean,
    creator: boolean,
    deleter: boolean,
    legacycaller: boolean,
    "static": boolean,
    stringifier: boolean,
    idlType: ? IdlType,
    name : ? String,
    arguments : Array < IdlArgument > ,
    extAttrs: Array < IdlExtAttr > ,
    iteratorObject: ? string,
};


type IdlConstantValue = {
    "type": string;
    value: mixed,
    negative: ? boolean,
}

type IdlInterfaceMember = IdlIterator | IdlOperation | IdlSerializer | IdlConstant;
type IdlRootDefinition = IdlInterface | IdlCallbackInterface | IdlException | IdlEnum | IdlTypedef | IdlCallback | IdlDictionary | IdlImplements;

type IdlArgument = {
    optional: boolean,
    variadic: boolean,
    extAttrs: Array < IdlExtAttr > ,
    idlType: IdlType,
    name: string,
};

type IdlAst = IdlRootDefinition;

type IdlDefaultValue = IdlConstantValue;
type IdlAstArray = Array < IdlAst > ;

type IdlField = IdlDictionaryField | IdlExceptionField;



declare module 'webidl2' {

    declare

    function parse(input: string): IdlAstArray;
}