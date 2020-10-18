/// <reference types="node" />
export const get: typeof http.get | typeof https.get;
export const request: typeof http.get | typeof https.get;
export type ClientRequest = http.ClientRequest;
export type HTTPRequestOptions = http.RequestOptions;
export type HTTPSRequestOptions = http.RequestOptions & import("tls").SecureContextOptions & {
    rejectUnauthorized?: boolean | undefined;
    servername?: string | undefined;
};
export type RequestOptions = http.RequestOptions | https.RequestOptions;
export type HTTPFunction = (optionsOrURL: string | URL | HTTPRequestOptions, ...args: any) => ClientRequest;
export type HTTPSFunction = (optionsOrURL: string | URL | HTTPSRequestOptions, ...args: any) => ClientRequest;
export type VariedFunction = typeof http.get | typeof https.get;
import http from "http";
import https from "https";
