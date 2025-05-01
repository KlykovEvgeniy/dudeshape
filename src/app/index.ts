import { App } from "./App";
import { store } from './provider/store';
import { useAppDispatch, useAppSelector } from "./hooks/useApp";
import { HTTPS, RESOURSE } from "./model";
import type { Product, ID } from "./model";

export { App, store, useAppDispatch, useAppSelector, HTTPS, RESOURSE };
export type { Product, ID };