/* WebIDL: interface ArrayBuffer */
declare class ArrayBuffer {
    constructor(length: number): void;
    byteLength: number;
    slice(begin: number, end? : number): ArrayBuffer;
    static isView(value: any): boolean;
}

/* ArrayBuffer implements Transferable */

/* [NoInterfaceObject] */
/* WebIDL: interface ArrayBufferView */
type ArrayBufferView = {
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
};

/* WebIDL: interface Int8Array */
declare class Int8Array {
    constructor(length: number): void;
    constructor(array: Int8Array): void;
    constructor(array: Array<number>): void;
    constructor(buffer: ArrayBuffer, byteOffset? : number, length? : number): void;
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int8Array, offset? : number): void;
    set(array: Array<number>, offset? : number): void;
    subarray(start: number, end: number): Int8Array;
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

/* WebIDL: interface Uint8Array */
declare class Uint8Array {
    constructor(length: number): void;
    constructor(array: Uint8Array): void;
    constructor(array: Array<number>): void;
    constructor(buffer: ArrayBuffer, byteOffset? : number, length? : number): void;
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint8Array, offset? : number): void;
    set(array: Array<number>, offset? : number): void;
    subarray(start: number, end: number): Uint8Array;
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

/* WebIDL: interface Uint8ClampedArray */
declare class Uint8ClampedArray {
    constructor(length: number): void;
    constructor(array: Uint8ClampedArray): void;
    constructor(array: Array<number>): void;
    constructor(buffer: ArrayBuffer, byteOffset? : number, length? : number): void;
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, /* [Clamp] */ value: number): void;
    set(array: Uint8ClampedArray, offset? : number): void;
    set(array: Array<number>, offset? : number): void;
    subarray(start: number, end: number): Uint8ClampedArray;
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

/* WebIDL: interface Int16Array */
declare class Int16Array {
    constructor(length: number): void;
    constructor(array: Int16Array): void;
    constructor(array: Array<number>): void;
    constructor(buffer: ArrayBuffer, byteOffset? : number, length? : number): void;
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int16Array, offset? : number): void;
    set(array: Array<number>, offset? : number): void;
    subarray(start: number, end: number): Int16Array;
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

/* WebIDL: interface Uint16Array */
declare class Uint16Array {
    constructor(length: number): void;
    constructor(array: Uint16Array): void;
    constructor(array: Array<number>): void;
    constructor(buffer: ArrayBuffer, byteOffset? : number, length? : number): void;
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint16Array, offset? : number): void;
    set(array: Array<number>, offset? : number): void;
    subarray(start: number, end: number): Uint16Array;
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

/* WebIDL: interface Int32Array */
declare class Int32Array {
    constructor(length: number): void;
    constructor(array: Int32Array): void;
    constructor(array: Array<number>): void;
    constructor(buffer: ArrayBuffer, byteOffset? : number, length? : number): void;
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int32Array, offset? : number): void;
    set(array: Array<number>, offset? : number): void;
    subarray(start: number, end: number): Int32Array;
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

/* WebIDL: interface Uint32Array */
declare class Uint32Array {
    constructor(length: number): void;
    constructor(array: Uint32Array): void;
    constructor(array: Array<number>): void;
    constructor(buffer: ArrayBuffer, byteOffset? : number, length? : number): void;
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint32Array, offset? : number): void;
    set(array: Array<number>, offset? : number): void;
    subarray(start: number, end: number): Uint32Array;
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

/* WebIDL: interface Float32Array */
declare class Float32Array {
    constructor(length: number): void;
    constructor(array: Float32Array): void;
    constructor(array: Array<number>): void;
    constructor(buffer: ArrayBuffer, byteOffset? : number, length? : number): void;
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Float32Array, offset? : number): void;
    set(array: Array<number>, offset? : number): void;
    subarray(start: number, end: number): Float32Array;
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

/* WebIDL: interface Float64Array */
declare class Float64Array {
    constructor(length: number): void;
    constructor(array: Float64Array): void;
    constructor(array: Array<number>): void;
    constructor(buffer: ArrayBuffer, byteOffset? : number, length? : number): void;
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Float64Array, offset? : number): void;
    set(array: Array<number>, offset? : number): void;
    subarray(start: number, end: number): Float64Array;
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

/* WebIDL: interface DataView */
declare class DataView {
    constructor(buffer: ArrayBuffer, byteOffset? : number, byteLength? : number): void;
    getInt8(byteOffset: number): number;
    getUint8(byteOffset: number): number;
    getInt16(byteOffset: number, littleEndian? : boolean): number;
    getUint16(byteOffset: number, littleEndian? : boolean): number;
    getInt32(byteOffset: number, littleEndian? : boolean): number;
    getUint32(byteOffset: number, littleEndian? : boolean): number;
    getFloat32(byteOffset: number, littleEndian? : boolean): number;
    getFloat64(byteOffset: number, littleEndian? : boolean): number;
    setInt8(byteOffset: number, value: number): void;
    setUint8(byteOffset: number, value: number): void;
    setInt16(byteOffset: number, value: number, littleEndian? : boolean): void;
    setUint16(byteOffset: number, value: number, littleEndian? : boolean): void;
    setInt32(byteOffset: number, value: number, littleEndian? : boolean): void;
    setUint32(byteOffset: number, value: number, littleEndian? : boolean): void;
    setFloat32(byteOffset: number, value: number, littleEndian? : boolean): void;
    setFloat64(byteOffset: number, value: number, littleEndian? : boolean): void;
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}



