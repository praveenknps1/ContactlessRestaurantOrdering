import { configureStore } from "@reduxjs/toolkit";
import { CartData } from "./action";

export let store=configureStore(CartData)
