declare class Elements extends Array {
  query(relativeSelectors: string): ?Element;
  queryAll(relativeSelectors: string): Elements
};

type GLenum = number;

type GLboolean = boolean;

type GLbitfield = number;

type GLbyte = number;

type GLshort = number;

type GLint = number;

type GLsizei = number;

type GLintptr = number;

type GLsizeiptr = number;

type GLubyte = number;

type GLushort = number;

type GLuint = number;

type GLfloat = number;

type GLclampf = number;

/* WebIDL: dictionary WebGLContextAttributes */
declare class WebGLContextAttributes {
    alpha: GLboolean;
    depth: GLboolean;
    stencil: GLboolean;
    antialias: GLboolean;
    premultipliedAlpha: GLboolean;
    preserveDrawingBuffer: GLboolean;
    preferLowPowerToHighPerformance: GLboolean;
    failIfMajorPerformanceCaveat: GLboolean;
}

/* WebIDL: interface WebGLObject */
declare class WebGLObject {
}

/* WebIDL: interface WebGLBuffer */
declare class WebGLBuffer extends WebGLObject {
}

/* WebIDL: interface WebGLFramebuffer */
declare class WebGLFramebuffer extends WebGLObject {
}

/* WebIDL: interface WebGLProgram */
declare class WebGLProgram extends WebGLObject {
}

/* WebIDL: interface WebGLRenderbuffer */
declare class WebGLRenderbuffer extends WebGLObject {
}

/* WebIDL: interface WebGLShader */
declare class WebGLShader extends WebGLObject {
}

/* WebIDL: interface WebGLTexture */
declare class WebGLTexture extends WebGLObject {
}

/* WebIDL: interface WebGLUniformLocation */
declare class WebGLUniformLocation {
}

/* WebIDL: interface WebGLActiveInfo */
declare class WebGLActiveInfo {
    size: GLint;
    type: GLenum;
    name: string;
}

/* WebIDL: interface WebGLShaderPrecisionFormat */
declare class WebGLShaderPrecisionFormat {
    rangeMin: GLint;
    rangeMax: GLint;
    precision: GLint;
}

type BufferDataSource = ArrayBuffer | ArrayBufferView;

type TexImageSource = ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;

/* [NoInterfaceObject] */
/* WebIDL: interface WebGLRenderingContextBase */
type WebGLRenderingContextBase = {
    DEPTH_BUFFER_BIT: GLenum;
    STENCIL_BUFFER_BIT: GLenum;
    COLOR_BUFFER_BIT: GLenum;
    POINTS: GLenum;
    LINES: GLenum;
    LINE_LOOP: GLenum;
    LINE_STRIP: GLenum;
    TRIANGLES: GLenum;
    TRIANGLE_STRIP: GLenum;
    TRIANGLE_FAN: GLenum;
    ZERO: GLenum;
    ONE: GLenum;
    SRC_COLOR: GLenum;
    ONE_MINUS_SRC_COLOR: GLenum;
    SRC_ALPHA: GLenum;
    ONE_MINUS_SRC_ALPHA: GLenum;
    DST_ALPHA: GLenum;
    ONE_MINUS_DST_ALPHA: GLenum;
    DST_COLOR: GLenum;
    ONE_MINUS_DST_COLOR: GLenum;
    SRC_ALPHA_SATURATE: GLenum;
    FUNC_ADD: GLenum;
    BLEND_EQUATION: GLenum;
    BLEND_EQUATION_RGB: GLenum;
    BLEND_EQUATION_ALPHA: GLenum;
    FUNC_SUBTRACT: GLenum;
    FUNC_REVERSE_SUBTRACT: GLenum;
    BLEND_DST_RGB: GLenum;
    BLEND_SRC_RGB: GLenum;
    BLEND_DST_ALPHA: GLenum;
    BLEND_SRC_ALPHA: GLenum;
    CONSTANT_COLOR: GLenum;
    ONE_MINUS_CONSTANT_COLOR: GLenum;
    CONSTANT_ALPHA: GLenum;
    ONE_MINUS_CONSTANT_ALPHA: GLenum;
    BLEND_COLOR: GLenum;
    ARRAY_BUFFER: GLenum;
    ELEMENT_ARRAY_BUFFER: GLenum;
    ARRAY_BUFFER_BINDING: GLenum;
    ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    STREAM_DRAW: GLenum;
    STATIC_DRAW: GLenum;
    DYNAMIC_DRAW: GLenum;
    BUFFER_SIZE: GLenum;
    BUFFER_USAGE: GLenum;
    CURRENT_VERTEX_ATTRIB: GLenum;
    FRONT: GLenum;
    BACK: GLenum;
    FRONT_AND_BACK: GLenum;
    CULL_FACE: GLenum;
    BLEND: GLenum;
    DITHER: GLenum;
    STENCIL_TEST: GLenum;
    DEPTH_TEST: GLenum;
    SCISSOR_TEST: GLenum;
    POLYGON_OFFSET_FILL: GLenum;
    SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    SAMPLE_COVERAGE: GLenum;
    NO_ERROR: GLenum;
    INVALID_ENUM: GLenum;
    INVALID_VALUE: GLenum;
    INVALID_OPERATION: GLenum;
    OUT_OF_MEMORY: GLenum;
    CW: GLenum;
    CCW: GLenum;
    LINE_WIDTH: GLenum;
    ALIASED_POINT_SIZE_RANGE: GLenum;
    ALIASED_LINE_WIDTH_RANGE: GLenum;
    CULL_FACE_MODE: GLenum;
    FRONT_FACE: GLenum;
    DEPTH_RANGE: GLenum;
    DEPTH_WRITEMASK: GLenum;
    DEPTH_CLEAR_VALUE: GLenum;
    DEPTH_FUNC: GLenum;
    STENCIL_CLEAR_VALUE: GLenum;
    STENCIL_FUNC: GLenum;
    STENCIL_FAIL: GLenum;
    STENCIL_PASS_DEPTH_FAIL: GLenum;
    STENCIL_PASS_DEPTH_PASS: GLenum;
    STENCIL_REF: GLenum;
    STENCIL_VALUE_MASK: GLenum;
    STENCIL_WRITEMASK: GLenum;
    STENCIL_BACK_FUNC: GLenum;
    STENCIL_BACK_FAIL: GLenum;
    STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    STENCIL_BACK_REF: GLenum;
    STENCIL_BACK_VALUE_MASK: GLenum;
    STENCIL_BACK_WRITEMASK: GLenum;
    VIEWPORT: GLenum;
    SCISSOR_BOX: GLenum;
    COLOR_CLEAR_VALUE: GLenum;
    COLOR_WRITEMASK: GLenum;
    UNPACK_ALIGNMENT: GLenum;
    PACK_ALIGNMENT: GLenum;
    MAX_TEXTURE_SIZE: GLenum;
    MAX_VIEWPORT_DIMS: GLenum;
    SUBPIXEL_BITS: GLenum;
    RED_BITS: GLenum;
    GREEN_BITS: GLenum;
    BLUE_BITS: GLenum;
    ALPHA_BITS: GLenum;
    DEPTH_BITS: GLenum;
    STENCIL_BITS: GLenum;
    POLYGON_OFFSET_UNITS: GLenum;
    POLYGON_OFFSET_FACTOR: GLenum;
    TEXTURE_BINDING_2D: GLenum;
    SAMPLE_BUFFERS: GLenum;
    SAMPLES: GLenum;
    SAMPLE_COVERAGE_VALUE: GLenum;
    SAMPLE_COVERAGE_INVERT: GLenum;
    COMPRESSED_TEXTURE_FORMATS: GLenum;
    DONT_CARE: GLenum;
    FASTEST: GLenum;
    NICEST: GLenum;
    GENERATE_MIPMAP_HINT: GLenum;
    BYTE: GLenum;
    UNSIGNED_BYTE: GLenum;
    SHORT: GLenum;
    UNSIGNED_SHORT: GLenum;
    INT: GLenum;
    UNSIGNED_INT: GLenum;
    FLOAT: GLenum;
    DEPTH_COMPONENT: GLenum;
    ALPHA: GLenum;
    RGB: GLenum;
    RGBA: GLenum;
    LUMINANCE: GLenum;
    LUMINANCE_ALPHA: GLenum;
    UNSIGNED_SHORT_4_4_4_4: GLenum;
    UNSIGNED_SHORT_5_5_5_1: GLenum;
    UNSIGNED_SHORT_5_6_5: GLenum;
    FRAGMENT_SHADER: GLenum;
    VERTEX_SHADER: GLenum;
    MAX_VERTEX_ATTRIBS: GLenum;
    MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    MAX_VARYING_VECTORS: GLenum;
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    MAX_TEXTURE_IMAGE_UNITS: GLenum;
    MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    SHADER_TYPE: GLenum;
    DELETE_STATUS: GLenum;
    LINK_STATUS: GLenum;
    VALIDATE_STATUS: GLenum;
    ATTACHED_SHADERS: GLenum;
    ACTIVE_UNIFORMS: GLenum;
    ACTIVE_ATTRIBUTES: GLenum;
    SHADING_LANGUAGE_VERSION: GLenum;
    CURRENT_PROGRAM: GLenum;
    NEVER: GLenum;
    LESS: GLenum;
    EQUAL: GLenum;
    LEQUAL: GLenum;
    GREATER: GLenum;
    NOTEQUAL: GLenum;
    GEQUAL: GLenum;
    ALWAYS: GLenum;
    KEEP: GLenum;
    REPLACE: GLenum;
    INCR: GLenum;
    DECR: GLenum;
    INVERT: GLenum;
    INCR_WRAP: GLenum;
    DECR_WRAP: GLenum;
    VENDOR: GLenum;
    RENDERER: GLenum;
    VERSION: GLenum;
    NEAREST: GLenum;
    LINEAR: GLenum;
    NEAREST_MIPMAP_NEAREST: GLenum;
    LINEAR_MIPMAP_NEAREST: GLenum;
    NEAREST_MIPMAP_LINEAR: GLenum;
    LINEAR_MIPMAP_LINEAR: GLenum;
    TEXTURE_MAG_FILTER: GLenum;
    TEXTURE_MIN_FILTER: GLenum;
    TEXTURE_WRAP_S: GLenum;
    TEXTURE_WRAP_T: GLenum;
    TEXTURE_2D: GLenum;
    TEXTURE: GLenum;
    TEXTURE_CUBE_MAP: GLenum;
    TEXTURE_BINDING_CUBE_MAP: GLenum;
    TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    TEXTURE0: GLenum;
    TEXTURE1: GLenum;
    TEXTURE2: GLenum;
    TEXTURE3: GLenum;
    TEXTURE4: GLenum;
    TEXTURE5: GLenum;
    TEXTURE6: GLenum;
    TEXTURE7: GLenum;
    TEXTURE8: GLenum;
    TEXTURE9: GLenum;
    TEXTURE10: GLenum;
    TEXTURE11: GLenum;
    TEXTURE12: GLenum;
    TEXTURE13: GLenum;
    TEXTURE14: GLenum;
    TEXTURE15: GLenum;
    TEXTURE16: GLenum;
    TEXTURE17: GLenum;
    TEXTURE18: GLenum;
    TEXTURE19: GLenum;
    TEXTURE20: GLenum;
    TEXTURE21: GLenum;
    TEXTURE22: GLenum;
    TEXTURE23: GLenum;
    TEXTURE24: GLenum;
    TEXTURE25: GLenum;
    TEXTURE26: GLenum;
    TEXTURE27: GLenum;
    TEXTURE28: GLenum;
    TEXTURE29: GLenum;
    TEXTURE30: GLenum;
    TEXTURE31: GLenum;
    ACTIVE_TEXTURE: GLenum;
    REPEAT: GLenum;
    CLAMP_TO_EDGE: GLenum;
    MIRRORED_REPEAT: GLenum;
    FLOAT_VEC2: GLenum;
    FLOAT_VEC3: GLenum;
    FLOAT_VEC4: GLenum;
    INT_VEC2: GLenum;
    INT_VEC3: GLenum;
    INT_VEC4: GLenum;
    BOOL: GLenum;
    BOOL_VEC2: GLenum;
    BOOL_VEC3: GLenum;
    BOOL_VEC4: GLenum;
    FLOAT_MAT2: GLenum;
    FLOAT_MAT3: GLenum;
    FLOAT_MAT4: GLenum;
    SAMPLER_2D: GLenum;
    SAMPLER_CUBE: GLenum;
    VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    COMPILE_STATUS: GLenum;
    LOW_FLOAT: GLenum;
    MEDIUM_FLOAT: GLenum;
    HIGH_FLOAT: GLenum;
    LOW_INT: GLenum;
    MEDIUM_INT: GLenum;
    HIGH_INT: GLenum;
    FRAMEBUFFER: GLenum;
    RENDERBUFFER: GLenum;
    RGBA4: GLenum;
    RGB5_A1: GLenum;
    RGB565: GLenum;
    DEPTH_COMPONENT16: GLenum;
    STENCIL_INDEX: GLenum;
    STENCIL_INDEX8: GLenum;
    DEPTH_STENCIL: GLenum;
    RENDERBUFFER_WIDTH: GLenum;
    RENDERBUFFER_HEIGHT: GLenum;
    RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    RENDERBUFFER_RED_SIZE: GLenum;
    RENDERBUFFER_GREEN_SIZE: GLenum;
    RENDERBUFFER_BLUE_SIZE: GLenum;
    RENDERBUFFER_ALPHA_SIZE: GLenum;
    RENDERBUFFER_DEPTH_SIZE: GLenum;
    RENDERBUFFER_STENCIL_SIZE: GLenum;
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    COLOR_ATTACHMENT0: GLenum;
    DEPTH_ATTACHMENT: GLenum;
    STENCIL_ATTACHMENT: GLenum;
    DEPTH_STENCIL_ATTACHMENT: GLenum;
    NONE: GLenum;
    FRAMEBUFFER_COMPLETE: GLenum;
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    FRAMEBUFFER_UNSUPPORTED: GLenum;
    FRAMEBUFFER_BINDING: GLenum;
    RENDERBUFFER_BINDING: GLenum;
    MAX_RENDERBUFFER_SIZE: GLenum;
    INVALID_FRAMEBUFFER_OPERATION: GLenum;
    UNPACK_FLIP_Y_WEBGL: GLenum;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    CONTEXT_LOST_WEBGL: GLenum;
    UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    BROWSER_DEFAULT_WEBGL: GLenum;
    canvas: HTMLCanvasElement;
    drawingBufferWidth: GLsizei;
    drawingBufferHeight: GLsizei;
    getContextAttributes(): WebGLContextAttributes;
    isContextLost(): boolean;
    getSupportedExtensions(): ?Array<string>;
    getExtension(name: string): Object;
    activeTexture(texture: GLenum): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    bindBuffer(target: GLenum, buffer: WebGLBuffer): void;
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer): void;
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer): void;
    bindTexture(target: GLenum, texture: WebGLTexture): void;
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    blendEquation(mode: GLenum): void;
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: BufferDataSource, usage: GLenum): void;
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferDataSource): void;
    checkFramebufferStatus(target: GLenum): GLenum;
    clear(mask: GLbitfield): void;
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    clearDepth(depth: GLclampf): void;
    clearStencil(s: GLint): void;
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    compileShader(shader: WebGLShader): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createBuffer(): WebGLBuffer;
    createFramebuffer(): WebGLFramebuffer;
    createProgram(): WebGLProgram;
    createRenderbuffer(): WebGLRenderbuffer;
    createShader(type: GLenum): WebGLShader;
    createTexture(): WebGLTexture;
    cullFace(mode: GLenum): void;
    deleteBuffer(buffer: WebGLBuffer): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer): void;
    deleteProgram(program: WebGLProgram): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer): void;
    deleteShader(shader: WebGLShader): void;
    deleteTexture(texture: WebGLTexture): void;
    depthFunc(func: GLenum): void;
    depthMask(flag: GLboolean): void;
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: GLenum): void;
    disableVertexAttribArray(index: GLuint): void;
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    enable(cap: GLenum): void;
    enableVertexAttribArray(index: GLuint): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer): void;
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture, level: GLint): void;
    frontFace(mode: GLenum): void;
    generateMipmap(target: GLenum): void;
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo;
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo;
    getAttachedShaders(program: WebGLProgram): ?Array<WebGLShader>;
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    getBufferParameter(target: GLenum, pname: GLenum): any;
    getParameter(pname: GLenum): any;
    getError(): GLenum;
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    getProgramInfoLog(program: WebGLProgram): string;
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat;
    getShaderInfoLog(shader: WebGLShader): string;
    getShaderSource(shader: WebGLShader): string;
    getTexParameter(target: GLenum, pname: GLenum): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLsizeiptr;
    hint(target: GLenum, mode: GLenum): void;
    isBuffer(buffer: WebGLBuffer): GLboolean;
    isEnabled(cap: GLenum): GLboolean;
    isFramebuffer(framebuffer: WebGLFramebuffer): GLboolean;
    isProgram(program: WebGLProgram): GLboolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer): GLboolean;
    isShader(shader: WebGLShader): GLboolean;
    isTexture(texture: WebGLTexture): GLboolean;
    lineWidth(width: GLfloat): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: GLenum, param: GLint): void;
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView): void;
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    stencilMask(mask: GLuint): void;
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLenum, format: GLenum, type: GLenum, source: TexImageSource): void;
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    uniform1f(location: WebGLUniformLocation, x: GLfloat): void;
    uniform1fv(location: WebGLUniformLocation, v: Float32Array): void;
    uniform1fv(location: WebGLUniformLocation, v: Array<GLfloat>): void;
    uniform1i(location: WebGLUniformLocation, x: GLint): void;
    uniform1iv(location: WebGLUniformLocation, v: Int32Array): void;
    uniform1iv(location: WebGLUniformLocation, v: Array<number>): void;
    uniform2f(location: WebGLUniformLocation, x: GLfloat, y: GLfloat): void;
    uniform2fv(location: WebGLUniformLocation, v: Float32Array): void;
    uniform2fv(location: WebGLUniformLocation, v: Array<GLfloat>): void;
    uniform2i(location: WebGLUniformLocation, x: GLint, y: GLint): void;
    uniform2iv(location: WebGLUniformLocation, v: Int32Array): void;
    uniform2iv(location: WebGLUniformLocation, v: Array<number>): void;
    uniform3f(location: WebGLUniformLocation, x: GLfloat, y: GLfloat, z: GLfloat): void;
    uniform3fv(location: WebGLUniformLocation, v: Float32Array): void;
    uniform3fv(location: WebGLUniformLocation, v: Array<GLfloat>): void;
    uniform3i(location: WebGLUniformLocation, x: GLint, y: GLint, z: GLint): void;
    uniform3iv(location: WebGLUniformLocation, v: Int32Array): void;
    uniform3iv(location: WebGLUniformLocation, v: Array<number>): void;
    uniform4f(location: WebGLUniformLocation, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    uniform4fv(location: WebGLUniformLocation, v: Float32Array): void;
    uniform4fv(location: WebGLUniformLocation, v: Array<GLfloat>): void;
    uniform4i(location: WebGLUniformLocation, x: GLint, y: GLint, z: GLint, w: GLint): void;
    uniform4iv(location: WebGLUniformLocation, v: Int32Array): void;
    uniform4iv(location: WebGLUniformLocation, v: Array<number>): void;
    uniformMatrix2fv(location: WebGLUniformLocation, transpose: GLboolean, value: Float32Array): void;
    uniformMatrix2fv(location: WebGLUniformLocation, transpose: GLboolean, value: Array<GLfloat>): void;
    uniformMatrix3fv(location: WebGLUniformLocation, transpose: GLboolean, value: Float32Array): void;
    uniformMatrix3fv(location: WebGLUniformLocation, transpose: GLboolean, value: Array<GLfloat>): void;
    uniformMatrix4fv(location: WebGLUniformLocation, transpose: GLboolean, value: Float32Array): void;
    uniformMatrix4fv(location: WebGLUniformLocation, transpose: GLboolean, value: Array<GLfloat>): void;
    useProgram(program: WebGLProgram): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(indx: GLuint, x: GLfloat): void;
    vertexAttrib1fv(indx: GLuint, values: Float32Array): void;
    vertexAttrib1fv(indx: GLuint, values: Array<GLfloat>): void;
    vertexAttrib2f(indx: GLuint, x: GLfloat, y: GLfloat): void;
    vertexAttrib2fv(indx: GLuint, values: Float32Array): void;
    vertexAttrib2fv(indx: GLuint, values: Array<GLfloat>): void;
    vertexAttrib3f(indx: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    vertexAttrib3fv(indx: GLuint, values: Float32Array): void;
    vertexAttrib3fv(indx: GLuint, values: Array<GLfloat>): void;
    vertexAttrib4f(indx: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    vertexAttrib4fv(indx: GLuint, values: Float32Array): void;
    vertexAttrib4fv(indx: GLuint, values: Array<GLfloat>): void;
    vertexAttribPointer(indx: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
};

/* WebIDL: interface WebGLRenderingContext */
declare class WebGLRenderingContext {
    DEPTH_BUFFER_BIT: GLenum;
    STENCIL_BUFFER_BIT: GLenum;
    COLOR_BUFFER_BIT: GLenum;
    POINTS: GLenum;
    LINES: GLenum;
    LINE_LOOP: GLenum;
    LINE_STRIP: GLenum;
    TRIANGLES: GLenum;
    TRIANGLE_STRIP: GLenum;
    TRIANGLE_FAN: GLenum;
    ZERO: GLenum;
    ONE: GLenum;
    SRC_COLOR: GLenum;
    ONE_MINUS_SRC_COLOR: GLenum;
    SRC_ALPHA: GLenum;
    ONE_MINUS_SRC_ALPHA: GLenum;
    DST_ALPHA: GLenum;
    ONE_MINUS_DST_ALPHA: GLenum;
    DST_COLOR: GLenum;
    ONE_MINUS_DST_COLOR: GLenum;
    SRC_ALPHA_SATURATE: GLenum;
    FUNC_ADD: GLenum;
    BLEND_EQUATION: GLenum;
    BLEND_EQUATION_RGB: GLenum;
    BLEND_EQUATION_ALPHA: GLenum;
    FUNC_SUBTRACT: GLenum;
    FUNC_REVERSE_SUBTRACT: GLenum;
    BLEND_DST_RGB: GLenum;
    BLEND_SRC_RGB: GLenum;
    BLEND_DST_ALPHA: GLenum;
    BLEND_SRC_ALPHA: GLenum;
    CONSTANT_COLOR: GLenum;
    ONE_MINUS_CONSTANT_COLOR: GLenum;
    CONSTANT_ALPHA: GLenum;
    ONE_MINUS_CONSTANT_ALPHA: GLenum;
    BLEND_COLOR: GLenum;
    ARRAY_BUFFER: GLenum;
    ELEMENT_ARRAY_BUFFER: GLenum;
    ARRAY_BUFFER_BINDING: GLenum;
    ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    STREAM_DRAW: GLenum;
    STATIC_DRAW: GLenum;
    DYNAMIC_DRAW: GLenum;
    BUFFER_SIZE: GLenum;
    BUFFER_USAGE: GLenum;
    CURRENT_VERTEX_ATTRIB: GLenum;
    FRONT: GLenum;
    BACK: GLenum;
    FRONT_AND_BACK: GLenum;
    CULL_FACE: GLenum;
    BLEND: GLenum;
    DITHER: GLenum;
    STENCIL_TEST: GLenum;
    DEPTH_TEST: GLenum;
    SCISSOR_TEST: GLenum;
    POLYGON_OFFSET_FILL: GLenum;
    SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    SAMPLE_COVERAGE: GLenum;
    NO_ERROR: GLenum;
    INVALID_ENUM: GLenum;
    INVALID_VALUE: GLenum;
    INVALID_OPERATION: GLenum;
    OUT_OF_MEMORY: GLenum;
    CW: GLenum;
    CCW: GLenum;
    LINE_WIDTH: GLenum;
    ALIASED_POINT_SIZE_RANGE: GLenum;
    ALIASED_LINE_WIDTH_RANGE: GLenum;
    CULL_FACE_MODE: GLenum;
    FRONT_FACE: GLenum;
    DEPTH_RANGE: GLenum;
    DEPTH_WRITEMASK: GLenum;
    DEPTH_CLEAR_VALUE: GLenum;
    DEPTH_FUNC: GLenum;
    STENCIL_CLEAR_VALUE: GLenum;
    STENCIL_FUNC: GLenum;
    STENCIL_FAIL: GLenum;
    STENCIL_PASS_DEPTH_FAIL: GLenum;
    STENCIL_PASS_DEPTH_PASS: GLenum;
    STENCIL_REF: GLenum;
    STENCIL_VALUE_MASK: GLenum;
    STENCIL_WRITEMASK: GLenum;
    STENCIL_BACK_FUNC: GLenum;
    STENCIL_BACK_FAIL: GLenum;
    STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    STENCIL_BACK_REF: GLenum;
    STENCIL_BACK_VALUE_MASK: GLenum;
    STENCIL_BACK_WRITEMASK: GLenum;
    VIEWPORT: GLenum;
    SCISSOR_BOX: GLenum;
    COLOR_CLEAR_VALUE: GLenum;
    COLOR_WRITEMASK: GLenum;
    UNPACK_ALIGNMENT: GLenum;
    PACK_ALIGNMENT: GLenum;
    MAX_TEXTURE_SIZE: GLenum;
    MAX_VIEWPORT_DIMS: GLenum;
    SUBPIXEL_BITS: GLenum;
    RED_BITS: GLenum;
    GREEN_BITS: GLenum;
    BLUE_BITS: GLenum;
    ALPHA_BITS: GLenum;
    DEPTH_BITS: GLenum;
    STENCIL_BITS: GLenum;
    POLYGON_OFFSET_UNITS: GLenum;
    POLYGON_OFFSET_FACTOR: GLenum;
    TEXTURE_BINDING_2D: GLenum;
    SAMPLE_BUFFERS: GLenum;
    SAMPLES: GLenum;
    SAMPLE_COVERAGE_VALUE: GLenum;
    SAMPLE_COVERAGE_INVERT: GLenum;
    COMPRESSED_TEXTURE_FORMATS: GLenum;
    DONT_CARE: GLenum;
    FASTEST: GLenum;
    NICEST: GLenum;
    GENERATE_MIPMAP_HINT: GLenum;
    BYTE: GLenum;
    UNSIGNED_BYTE: GLenum;
    SHORT: GLenum;
    UNSIGNED_SHORT: GLenum;
    INT: GLenum;
    UNSIGNED_INT: GLenum;
    FLOAT: GLenum;
    DEPTH_COMPONENT: GLenum;
    ALPHA: GLenum;
    RGB: GLenum;
    RGBA: GLenum;
    LUMINANCE: GLenum;
    LUMINANCE_ALPHA: GLenum;
    UNSIGNED_SHORT_4_4_4_4: GLenum;
    UNSIGNED_SHORT_5_5_5_1: GLenum;
    UNSIGNED_SHORT_5_6_5: GLenum;
    FRAGMENT_SHADER: GLenum;
    VERTEX_SHADER: GLenum;
    MAX_VERTEX_ATTRIBS: GLenum;
    MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    MAX_VARYING_VECTORS: GLenum;
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    MAX_TEXTURE_IMAGE_UNITS: GLenum;
    MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    SHADER_TYPE: GLenum;
    DELETE_STATUS: GLenum;
    LINK_STATUS: GLenum;
    VALIDATE_STATUS: GLenum;
    ATTACHED_SHADERS: GLenum;
    ACTIVE_UNIFORMS: GLenum;
    ACTIVE_ATTRIBUTES: GLenum;
    SHADING_LANGUAGE_VERSION: GLenum;
    CURRENT_PROGRAM: GLenum;
    NEVER: GLenum;
    LESS: GLenum;
    EQUAL: GLenum;
    LEQUAL: GLenum;
    GREATER: GLenum;
    NOTEQUAL: GLenum;
    GEQUAL: GLenum;
    ALWAYS: GLenum;
    KEEP: GLenum;
    REPLACE: GLenum;
    INCR: GLenum;
    DECR: GLenum;
    INVERT: GLenum;
    INCR_WRAP: GLenum;
    DECR_WRAP: GLenum;
    VENDOR: GLenum;
    RENDERER: GLenum;
    VERSION: GLenum;
    NEAREST: GLenum;
    LINEAR: GLenum;
    NEAREST_MIPMAP_NEAREST: GLenum;
    LINEAR_MIPMAP_NEAREST: GLenum;
    NEAREST_MIPMAP_LINEAR: GLenum;
    LINEAR_MIPMAP_LINEAR: GLenum;
    TEXTURE_MAG_FILTER: GLenum;
    TEXTURE_MIN_FILTER: GLenum;
    TEXTURE_WRAP_S: GLenum;
    TEXTURE_WRAP_T: GLenum;
    TEXTURE_2D: GLenum;
    TEXTURE: GLenum;
    TEXTURE_CUBE_MAP: GLenum;
    TEXTURE_BINDING_CUBE_MAP: GLenum;
    TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    TEXTURE0: GLenum;
    TEXTURE1: GLenum;
    TEXTURE2: GLenum;
    TEXTURE3: GLenum;
    TEXTURE4: GLenum;
    TEXTURE5: GLenum;
    TEXTURE6: GLenum;
    TEXTURE7: GLenum;
    TEXTURE8: GLenum;
    TEXTURE9: GLenum;
    TEXTURE10: GLenum;
    TEXTURE11: GLenum;
    TEXTURE12: GLenum;
    TEXTURE13: GLenum;
    TEXTURE14: GLenum;
    TEXTURE15: GLenum;
    TEXTURE16: GLenum;
    TEXTURE17: GLenum;
    TEXTURE18: GLenum;
    TEXTURE19: GLenum;
    TEXTURE20: GLenum;
    TEXTURE21: GLenum;
    TEXTURE22: GLenum;
    TEXTURE23: GLenum;
    TEXTURE24: GLenum;
    TEXTURE25: GLenum;
    TEXTURE26: GLenum;
    TEXTURE27: GLenum;
    TEXTURE28: GLenum;
    TEXTURE29: GLenum;
    TEXTURE30: GLenum;
    TEXTURE31: GLenum;
    ACTIVE_TEXTURE: GLenum;
    REPEAT: GLenum;
    CLAMP_TO_EDGE: GLenum;
    MIRRORED_REPEAT: GLenum;
    FLOAT_VEC2: GLenum;
    FLOAT_VEC3: GLenum;
    FLOAT_VEC4: GLenum;
    INT_VEC2: GLenum;
    INT_VEC3: GLenum;
    INT_VEC4: GLenum;
    BOOL: GLenum;
    BOOL_VEC2: GLenum;
    BOOL_VEC3: GLenum;
    BOOL_VEC4: GLenum;
    FLOAT_MAT2: GLenum;
    FLOAT_MAT3: GLenum;
    FLOAT_MAT4: GLenum;
    SAMPLER_2D: GLenum;
    SAMPLER_CUBE: GLenum;
    VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    COMPILE_STATUS: GLenum;
    LOW_FLOAT: GLenum;
    MEDIUM_FLOAT: GLenum;
    HIGH_FLOAT: GLenum;
    LOW_INT: GLenum;
    MEDIUM_INT: GLenum;
    HIGH_INT: GLenum;
    FRAMEBUFFER: GLenum;
    RENDERBUFFER: GLenum;
    RGBA4: GLenum;
    RGB5_A1: GLenum;
    RGB565: GLenum;
    DEPTH_COMPONENT16: GLenum;
    STENCIL_INDEX: GLenum;
    STENCIL_INDEX8: GLenum;
    DEPTH_STENCIL: GLenum;
    RENDERBUFFER_WIDTH: GLenum;
    RENDERBUFFER_HEIGHT: GLenum;
    RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    RENDERBUFFER_RED_SIZE: GLenum;
    RENDERBUFFER_GREEN_SIZE: GLenum;
    RENDERBUFFER_BLUE_SIZE: GLenum;
    RENDERBUFFER_ALPHA_SIZE: GLenum;
    RENDERBUFFER_DEPTH_SIZE: GLenum;
    RENDERBUFFER_STENCIL_SIZE: GLenum;
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    COLOR_ATTACHMENT0: GLenum;
    DEPTH_ATTACHMENT: GLenum;
    STENCIL_ATTACHMENT: GLenum;
    DEPTH_STENCIL_ATTACHMENT: GLenum;
    NONE: GLenum;
    FRAMEBUFFER_COMPLETE: GLenum;
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    FRAMEBUFFER_UNSUPPORTED: GLenum;
    FRAMEBUFFER_BINDING: GLenum;
    RENDERBUFFER_BINDING: GLenum;
    MAX_RENDERBUFFER_SIZE: GLenum;
    INVALID_FRAMEBUFFER_OPERATION: GLenum;
    UNPACK_FLIP_Y_WEBGL: GLenum;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    CONTEXT_LOST_WEBGL: GLenum;
    UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    BROWSER_DEFAULT_WEBGL: GLenum;
    canvas: HTMLCanvasElement;
    drawingBufferWidth: GLsizei;
    drawingBufferHeight: GLsizei;
    getContextAttributes(): WebGLContextAttributes;
    isContextLost(): boolean;
    getSupportedExtensions(): ?Array<string>;
    getExtension(name: string): Object;
    activeTexture(texture: GLenum): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    bindBuffer(target: GLenum, buffer: WebGLBuffer): void;
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer): void;
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer): void;
    bindTexture(target: GLenum, texture: WebGLTexture): void;
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    blendEquation(mode: GLenum): void;
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: BufferDataSource, usage: GLenum): void;
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferDataSource): void;
    checkFramebufferStatus(target: GLenum): GLenum;
    clear(mask: GLbitfield): void;
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    clearDepth(depth: GLclampf): void;
    clearStencil(s: GLint): void;
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    compileShader(shader: WebGLShader): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createBuffer(): WebGLBuffer;
    createFramebuffer(): WebGLFramebuffer;
    createProgram(): WebGLProgram;
    createRenderbuffer(): WebGLRenderbuffer;
    createShader(type: GLenum): WebGLShader;
    createTexture(): WebGLTexture;
    cullFace(mode: GLenum): void;
    deleteBuffer(buffer: WebGLBuffer): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer): void;
    deleteProgram(program: WebGLProgram): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer): void;
    deleteShader(shader: WebGLShader): void;
    deleteTexture(texture: WebGLTexture): void;
    depthFunc(func: GLenum): void;
    depthMask(flag: GLboolean): void;
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: GLenum): void;
    disableVertexAttribArray(index: GLuint): void;
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    enable(cap: GLenum): void;
    enableVertexAttribArray(index: GLuint): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer): void;
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture, level: GLint): void;
    frontFace(mode: GLenum): void;
    generateMipmap(target: GLenum): void;
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo;
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo;
    getAttachedShaders(program: WebGLProgram): ?Array<WebGLShader>;
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    getBufferParameter(target: GLenum, pname: GLenum): any;
    getParameter(pname: GLenum): any;
    getError(): GLenum;
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    getProgramInfoLog(program: WebGLProgram): string;
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat;
    getShaderInfoLog(shader: WebGLShader): string;
    getShaderSource(shader: WebGLShader): string;
    getTexParameter(target: GLenum, pname: GLenum): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLsizeiptr;
    hint(target: GLenum, mode: GLenum): void;
    isBuffer(buffer: WebGLBuffer): GLboolean;
    isEnabled(cap: GLenum): GLboolean;
    isFramebuffer(framebuffer: WebGLFramebuffer): GLboolean;
    isProgram(program: WebGLProgram): GLboolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer): GLboolean;
    isShader(shader: WebGLShader): GLboolean;
    isTexture(texture: WebGLTexture): GLboolean;
    lineWidth(width: GLfloat): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: GLenum, param: GLint): void;
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView): void;
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    stencilMask(mask: GLuint): void;
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLenum, format: GLenum, type: GLenum, source: TexImageSource): void;
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    uniform1f(location: WebGLUniformLocation, x: GLfloat): void;
    uniform1fv(location: WebGLUniformLocation, v: Float32Array): void;
    uniform1fv(location: WebGLUniformLocation, v: Array<GLfloat>): void;
    uniform1i(location: WebGLUniformLocation, x: GLint): void;
    uniform1iv(location: WebGLUniformLocation, v: Int32Array): void;
    uniform1iv(location: WebGLUniformLocation, v: Array<number>): void;
    uniform2f(location: WebGLUniformLocation, x: GLfloat, y: GLfloat): void;
    uniform2fv(location: WebGLUniformLocation, v: Float32Array): void;
    uniform2fv(location: WebGLUniformLocation, v: Array<GLfloat>): void;
    uniform2i(location: WebGLUniformLocation, x: GLint, y: GLint): void;
    uniform2iv(location: WebGLUniformLocation, v: Int32Array): void;
    uniform2iv(location: WebGLUniformLocation, v: Array<number>): void;
    uniform3f(location: WebGLUniformLocation, x: GLfloat, y: GLfloat, z: GLfloat): void;
    uniform3fv(location: WebGLUniformLocation, v: Float32Array): void;
    uniform3fv(location: WebGLUniformLocation, v: Array<GLfloat>): void;
    uniform3i(location: WebGLUniformLocation, x: GLint, y: GLint, z: GLint): void;
    uniform3iv(location: WebGLUniformLocation, v: Int32Array): void;
    uniform3iv(location: WebGLUniformLocation, v: Array<number>): void;
    uniform4f(location: WebGLUniformLocation, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    uniform4fv(location: WebGLUniformLocation, v: Float32Array): void;
    uniform4fv(location: WebGLUniformLocation, v: Array<GLfloat>): void;
    uniform4i(location: WebGLUniformLocation, x: GLint, y: GLint, z: GLint, w: GLint): void;
    uniform4iv(location: WebGLUniformLocation, v: Int32Array): void;
    uniform4iv(location: WebGLUniformLocation, v: Array<number>): void;
    uniformMatrix2fv(location: WebGLUniformLocation, transpose: GLboolean, value: Float32Array): void;
    uniformMatrix2fv(location: WebGLUniformLocation, transpose: GLboolean, value: Array<GLfloat>): void;
    uniformMatrix3fv(location: WebGLUniformLocation, transpose: GLboolean, value: Float32Array): void;
    uniformMatrix3fv(location: WebGLUniformLocation, transpose: GLboolean, value: Array<GLfloat>): void;
    uniformMatrix4fv(location: WebGLUniformLocation, transpose: GLboolean, value: Float32Array): void;
    uniformMatrix4fv(location: WebGLUniformLocation, transpose: GLboolean, value: Array<GLfloat>): void;
    useProgram(program: WebGLProgram): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(indx: GLuint, x: GLfloat): void;
    vertexAttrib1fv(indx: GLuint, values: Float32Array): void;
    vertexAttrib1fv(indx: GLuint, values: Array<GLfloat>): void;
    vertexAttrib2f(indx: GLuint, x: GLfloat, y: GLfloat): void;
    vertexAttrib2fv(indx: GLuint, values: Float32Array): void;
    vertexAttrib2fv(indx: GLuint, values: Array<GLfloat>): void;
    vertexAttrib3f(indx: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    vertexAttrib3fv(indx: GLuint, values: Float32Array): void;
    vertexAttrib3fv(indx: GLuint, values: Array<GLfloat>): void;
    vertexAttrib4f(indx: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    vertexAttrib4fv(indx: GLuint, values: Float32Array): void;
    vertexAttrib4fv(indx: GLuint, values: Array<GLfloat>): void;
    vertexAttribPointer(indx: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
}

/* WebIDL: interface WebGLContextEvent */
declare class WebGLContextEvent extends Event {
    constructor(type: string, eventInit? : WebGLContextEventInit): void;
    statusMessage: string;
}

/* WebIDL: dictionary WebGLContextEventInit */
declare class WebGLContextEventInit extends EventInit {
    statusMessage: string;
}

/* [Exposed=WindowWorker] */
/* WebIDL: interface Event */
declare class Event {
    constructor(type: string, eventInitDict? : EventInit): void;
    type: string;
    target: EventTarget;
    currentTarget: EventTarget;
    NONE: number;
    CAPTURING_PHASE: number;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
    eventPhase: number;
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    bubbles: boolean;
    cancelable: boolean;
    preventDefault(): void;
    defaultPrevented: boolean;
    /* [Unforgeable] */
    isTrusted: boolean;
    timeStamp: number;
    initEvent(type: string, bubbles: boolean, cancelable: boolean): void;
}

/* WebIDL: dictionary EventInit */
declare class EventInit {
    bubbles: boolean;
    cancelable: boolean;
}

/* [Exposed=WindowWorker] */
/* WebIDL: interface CustomEvent */
declare class CustomEvent extends Event {
    constructor(type: string, eventInitDict? : CustomEventInit): void;
    detail: any;
    initCustomEvent(type: string, bubbles: boolean, cancelable: boolean, detail: any): void;
}

/* WebIDL: dictionary CustomEventInit */
declare class CustomEventInit extends EventInit {
    detail: any;
}

/* [Exposed=WindowWorker] */
/* WebIDL: interface EventTarget */
declare class EventTarget {
    addEventListener(type: string, callback: EventListener, capture? : boolean): void;
    removeEventListener(type: string, callback: EventListener, capture? : boolean): void;
    dispatchEvent(event: Event): boolean;
}

/* WebIDL: callback interface EventListener */
type EventListener = {
    handleEvent(event: Event): void;
} | ((event: Event) => void);

/* [NoInterfaceObject, Exposed=Window] */
/* WebIDL: interface NonElementParentNode */
type NonElementParentNode = {
    getElementById(elementId: string): Element;
};

/* [NoInterfaceObject, Exposed=Window] */
/* WebIDL: interface ParentNode */
type ParentNode = {
    /* [SameObject] */
    children: HTMLCollection;
    firstElementChild: Element;
    lastElementChild: Element;
    childElementCount: number;
    prepend(...nodes: Array<Node | string>): void;
    append(...nodes: Array<Node | string>): void;
    query(relativeSelectors: string): Element;
    queryAll(relativeSelectors: string): Elements;
    querySelector(selectors: string): Element;
    querySelectorAll(selectors: string): NodeList;
};

/* [NoInterfaceObject, Exposed=Window] */
/* WebIDL: interface NonDocumentTypeChildNode */
type NonDocumentTypeChildNode = {
    previousElementSibling: Element;
    nextElementSibling: Element;
};

/* [NoInterfaceObject, Exposed=Window] */
/* WebIDL: interface ChildNode */
type ChildNode = {
    before(...nodes: Array<Node | string>): void;
    after(...nodes: Array<Node | string>): void;
    replaceWith(...nodes: Array<Node | string>): void;
    remove(): void;
};

/* [Exposed=Window] */
/* WebIDL: interface NodeList */
declare class NodeList {
    [index: number]: Node;
    item(index: number): Node;
    length: number;
    /* Not implemented: iterable */
}

/* [Exposed=Window] */
/* WebIDL: interface HTMLCollection */
declare class HTMLCollection {
    length: number;
    item(index: number): Element;
    namedItem(name: string): Element;
    [index_or_name: number | string]: Element;
}

/* WebIDL: interface MutationObserver */
declare class MutationObserver {
    constructor(callback: MutationCallback): void;
    observe(target: Node, options: MutationObserverInit): void;
    disconnect(): void;
    takeRecords(): Array<MutationRecord>;
}

type MutationCallback = (mutations: Array<MutationRecord>, observer: MutationObserver) => void;

/* WebIDL: dictionary MutationObserverInit */
declare class MutationObserverInit {
    childList: boolean;
    attributes: boolean;
    characterData: boolean;
    subtree: boolean;
    attributeOldValue: boolean;
    characterDataOldValue: boolean;
    attributeFilter: Array<string>;
}

/* [Exposed=Window] */
/* WebIDL: interface MutationRecord */
declare class MutationRecord {
    type: string;
    target: Node;
    /* [SameObject] */
    addedNodes: NodeList;
    /* [SameObject] */
    removedNodes: NodeList;
    previousSibling: Node;
    nextSibling: Node;
    attributeName: string;
    attributeNamespace: string;
    oldValue: string;
}

/* [Exposed=Window] */
/* WebIDL: interface Node */
declare class Node extends EventTarget {
    ELEMENT_NODE: number;
    ATTRIBUTE_NODE: number;
    TEXT_NODE: number;
    CDATA_SECTION_NODE: number;
    ENTITY_REFERENCE_NODE: number;
    ENTITY_NODE: number;
    PROCESSING_INSTRUCTION_NODE: number;
    COMMENT_NODE: number;
    DOCUMENT_NODE: number;
    DOCUMENT_TYPE_NODE: number;
    DOCUMENT_FRAGMENT_NODE: number;
    NOTATION_NODE: number;
    nodeType: number;
    nodeName: string;
    baseURI: string;
    ownerDocument: Document;
    parentNode: Node;
    parentElement: Element;
    hasChildNodes(): boolean;
    /* [SameObject] */
    childNodes: NodeList;
    firstChild: Node;
    lastChild: Node;
    previousSibling: Node;
    nextSibling: Node;
    nodeValue: string;
    textContent: string;
    normalize(): void;
    cloneNode(deep? : boolean): Node;
    isEqualNode(otherNode: Node): boolean;
    DOCUMENT_POSITION_DISCONNECTED: number;
    DOCUMENT_POSITION_PRECEDING: number;
    DOCUMENT_POSITION_FOLLOWING: number;
    DOCUMENT_POSITION_CONTAINS: number;
    DOCUMENT_POSITION_CONTAINED_BY: number;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    compareDocumentPosition(other: Node): number;
    contains(other: Node): boolean;
    lookupPrefix(namespace: string): string;
    lookupNamespaceURI(prefix: string): string;
    isDefaultNamespace(namespace: string): boolean;
    insertBefore(node: Node, child: Node): Node;
    appendChild(node: Node): Node;
    replaceChild(node: Node, child: Node): Node;
    removeChild(child: Node): Node;
}

/* [Exposed=Window] */
/* WebIDL: interface Document */
declare class Document extends Node {
    constructor(): void;
    /* [SameObject] */
    implementation: DOMImplementation;
    URL: string;
    documentURI: string;
    origin: string;
    compatMode: string;
    characterSet: string;
    inputEncoding: string;
    contentType: string;
    doctype: DocumentType;
    documentElement: Element;
    getElementsByTagName(localName: string): HTMLCollection;
    getElementsByTagNameNS(namespace: string, localName: string): HTMLCollection;
    getElementsByClassName(classNames: string): HTMLCollection;
    createElement(localName: string): Element;
    createElementNS(namespace: string, qualifiedName: string): Element;
    createDocumentFragment(): DocumentFragment;
    createTextNode(data: string): Text;
    createComment(data: string): Comment;
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    importNode(node: Node, deep? : boolean): Node;
    adoptNode(node: Node): Node;
    createAttribute(localName: string): Attr;
    createAttributeNS(namespace: string, name: string): Attr;
    createEvent(_interface: string): Event;
    createRange(): Range;
    createNodeIterator(root: Node, whatToShow? : number, filter? : NodeFilter): NodeIterator;
    createTreeWalker(root: Node, whatToShow? : number, filter? : NodeFilter): TreeWalker;
    getElementById(elementId: string): Element;
    /* [SameObject] */
    children: HTMLCollection;
    firstElementChild: Element;
    lastElementChild: Element;
    childElementCount: number;
    prepend(...nodes: Array<Node | string>): void;
    append(...nodes: Array<Node | string>): void;
    query(relativeSelectors: string): Element;
    queryAll(relativeSelectors: string): Elements;
    querySelector(selectors: string): Element;
    querySelectorAll(selectors: string): NodeList;
}

/* [Exposed=Window] */
/* WebIDL: interface XMLDocument */
declare class XMLDocument extends Document {
}

/* [Exposed=Window] */
/* WebIDL: interface DOMImplementation */
declare class DOMImplementation {
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createDocument(namespace: string, /* [TreatNullAs=EmptyString] */ qualifiedName: string, doctype? : DocumentType): XMLDocument;
    createHTMLDocument(title? : string): Document;
    hasFeature(): boolean;
}

/* [Exposed=Window] */
/* WebIDL: interface DocumentFragment */
declare class DocumentFragment extends Node {
    constructor(): void;
    getElementById(elementId: string): Element;
    /* [SameObject] */
    children: HTMLCollection;
    firstElementChild: Element;
    lastElementChild: Element;
    childElementCount: number;
    prepend(...nodes: Array<Node | string>): void;
    append(...nodes: Array<Node | string>): void;
    query(relativeSelectors: string): Element;
    queryAll(relativeSelectors: string): Elements;
    querySelector(selectors: string): Element;
    querySelectorAll(selectors: string): NodeList;
}

/* [Exposed=Window] */
/* WebIDL: interface DocumentType */
declare class DocumentType extends Node {
    name: string;
    publicId: string;
    systemId: string;
    before(...nodes: Array<Node | string>): void;
    after(...nodes: Array<Node | string>): void;
    replaceWith(...nodes: Array<Node | string>): void;
    remove(): void;
}

/* [Exposed=Window] */
/* WebIDL: interface Element */
declare class Element extends Node {
    namespaceURI: string;
    prefix: string;
    localName: string;
    tagName: string;
    id: string;
    className: string;
    /* [SameObject] */
    classList: DOMTokenList;
    hasAttributes(): boolean;
    /* [SameObject] */
    attributes: NamedNodeMap;
    getAttribute(name: string): string;
    getAttributeNS(namespace: string, localName: string): string;
    setAttribute(name: string, value: string): void;
    setAttributeNS(namespace: string, name: string, value: string): void;
    removeAttribute(name: string): void;
    removeAttributeNS(namespace: string, localName: string): void;
    hasAttribute(name: string): boolean;
    hasAttributeNS(namespace: string, localName: string): boolean;
    getAttributeNode(name: string): Attr;
    getAttributeNodeNS(namespace: string, localName: string): Attr;
    setAttributeNode(attr: Attr): Attr;
    setAttributeNodeNS(attr: Attr): Attr;
    removeAttributeNode(attr: Attr): Attr;
    closest(selectors: string): Element;
    matches(selectors: string): boolean;
    getElementsByTagName(localName: string): HTMLCollection;
    getElementsByTagNameNS(namespace: string, localName: string): HTMLCollection;
    getElementsByClassName(classNames: string): HTMLCollection;
    /* [SameObject] */
    children: HTMLCollection;
    firstElementChild: Element;
    lastElementChild: Element;
    childElementCount: number;
    prepend(...nodes: Array<Node | string>): void;
    append(...nodes: Array<Node | string>): void;
    query(relativeSelectors: string): Element;
    queryAll(relativeSelectors: string): Elements;
    querySelector(selectors: string): Element;
    querySelectorAll(selectors: string): NodeList;
    previousElementSibling: Element;
    nextElementSibling: Element;
    before(...nodes: Array<Node | string>): void;
    after(...nodes: Array<Node | string>): void;
    replaceWith(...nodes: Array<Node | string>): void;
    remove(): void;
}

/* [Exposed=Window] */
/* WebIDL: interface NamedNodeMap */
declare class NamedNodeMap {
    length: number;
    item(index: number): Attr;
    getNamedItem(name: string): Attr;
    getNamedItemNS(namespace: string, localName: string): Attr;
    setNamedItem(attr: Attr): Attr;
    setNamedItemNS(attr: Attr): Attr;
    removeNamedItem(name: string): Attr;
    removeNamedItemNS(namespace: string, localName: string): Attr;
    [index_or_name: number | string]: Attr;
}

/* [Exposed=Window] */
/* WebIDL: interface Attr */
declare class Attr {
    namespaceURI: string;
    prefix: string;
    localName: string;
    name: string;
    value: string;
    nodeValue: string;
    textContent: string;
    ownerElement: Element;
    specified: boolean;
}

/* [Exposed=Window] */
/* WebIDL: interface CharacterData */
declare class CharacterData extends Node {
    /* [TreatNullAs=EmptyString] */
    data: string;
    length: number;
    substringData(offset: number, count: number): string;
    appendData(data: string): void;
    insertData(offset: number, data: string): void;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, data: string): void;
    previousElementSibling: Element;
    nextElementSibling: Element;
    before(...nodes: Array<Node | string>): void;
    after(...nodes: Array<Node | string>): void;
    replaceWith(...nodes: Array<Node | string>): void;
    remove(): void;
}

/* [Exposed=Window] */
/* WebIDL: interface Text */
declare class Text extends CharacterData {
    constructor(data? : string): void;
    splitText(offset: number): Text;
    wholeText: string;
}

/* [Exposed=Window] */
/* WebIDL: interface ProcessingInstruction */
declare class ProcessingInstruction extends CharacterData {
    target: string;
}

/* [Exposed=Window] */
/* WebIDL: interface Comment */
declare class Comment extends CharacterData {
    constructor(data? : string): void;
}

/* [Exposed=Window] */
/* WebIDL: interface Range */
declare class Range {
    constructor(): void;
    startContainer: Node;
    startOffset: number;
    endContainer: Node;
    endOffset: number;
    collapsed: boolean;
    commonAncestorContainer: Node;
    setStart(node: Node, offset: number): void;
    setEnd(node: Node, offset: number): void;
    setStartBefore(node: Node): void;
    setStartAfter(node: Node): void;
    setEndBefore(node: Node): void;
    setEndAfter(node: Node): void;
    collapse(toStart? : boolean): void;
    selectNode(node: Node): void;
    selectNodeContents(node: Node): void;
    START_TO_START: number;
    START_TO_END: number;
    END_TO_END: number;
    END_TO_START: number;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    deleteContents(): void;
    extractContents(): DocumentFragment;
    cloneContents(): DocumentFragment;
    insertNode(node: Node): void;
    surroundContents(newParent: Node): void;
    cloneRange(): Range;
    detach(): void;
    isPointInRange(node: Node, offset: number): boolean;
    comparePoint(node: Node, offset: number): number;
    intersectsNode(node: Node): boolean;
    toString(): string;
}

/* [Exposed=Window] */
/* WebIDL: interface NodeIterator */
declare class NodeIterator {
    /* [SameObject] */
    root: Node;
    referenceNode: Node;
    pointerBeforeReferenceNode: boolean;
    whatToShow: number;
    filter: NodeFilter;
    nextNode(): Node;
    previousNode(): Node;
    detach(): void;
}

/* [Exposed=Window] */
/* WebIDL: interface TreeWalker */
declare class TreeWalker {
    /* [SameObject] */
    root: Node;
    whatToShow: number;
    filter: NodeFilter;
    currentNode: Node;
    parentNode(): Node;
    firstChild(): Node;
    lastChild(): Node;
    previousSibling(): Node;
    nextSibling(): Node;
    previousNode(): Node;
    nextNode(): Node;
}

/* WebIDL: callback interface NodeFilter */
type NodeFilter = {
    FILTER_ACCEPT: number;
    FILTER_REJECT: number;
    FILTER_SKIP: number;
    SHOW_ALL: number;
    SHOW_ELEMENT: number;
    SHOW_ATTRIBUTE: number;
    SHOW_TEXT: number;
    SHOW_CDATA_SECTION: number;
    SHOW_ENTITY_REFERENCE: number;
    SHOW_ENTITY: number;
    SHOW_PROCESSING_INSTRUCTION: number;
    SHOW_COMMENT: number;
    SHOW_DOCUMENT: number;
    SHOW_DOCUMENT_TYPE: number;
    SHOW_DOCUMENT_FRAGMENT: number;
    SHOW_NOTATION: number;
    acceptNode(node: Node): number;
} | ((node: Node) => number);

/* WebIDL: interface DOMTokenList */
declare class DOMTokenList {
    length: number;
    [index: number]: string;
    item(index: number): string;
    contains(token: string): boolean;
    add(...tokens: Array<string>): void;
    remove(...tokens: Array<string>): void;
    toggle(token: string, force? : boolean): boolean;
    toString(): string;
    /* Not implemented: iterable */
}

/* WebIDL: interface DOMSettableTokenList */
declare class DOMSettableTokenList extends DOMTokenList {
    value: string;
}



