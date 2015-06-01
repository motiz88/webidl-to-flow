interface I {}
type T = {};
new I();	// <--- No error!
new T();	// Identifier T: could not resolve name
