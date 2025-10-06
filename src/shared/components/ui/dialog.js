"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "./utils";
function Dialog({ ...props }) {
    return _jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
const DialogTrigger = React.forwardRef(({ ...props }, ref) => (_jsx(DialogPrimitive.Trigger, { ref: ref, "data-slot": "dialog-trigger", ...props })));
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;
function DialogPortal({ ...props }) {
    return _jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
const DialogClose = React.forwardRef(({ ...props }, ref) => (_jsx(DialogPrimitive.Close, { ref: ref, "data-slot": "dialog-close", ...props })));
DialogClose.displayName = DialogPrimitive.Close.displayName;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (_jsx(DialogPrimitive.Overlay, { ref: ref, "data-slot": "dialog-overlay", className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className), ...props })));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (_jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [_jsx(DialogOverlay, {}), _jsxs(DialogPrimitive.Content, { ref: ref, "data-slot": "dialog-content", className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className), ...props, children: [children, _jsxs(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [_jsx(XIcon, {}), _jsx("span", { className: "sr-only", children: "Close" })] })] })] })));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, "data-slot": "dialog-header", className: cn("flex flex-col gap-2 text-center sm:text-left", className), ...props })));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, "data-slot": "dialog-footer", className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className), ...props })));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx(DialogPrimitive.Title, { ref: ref, "data-slot": "dialog-title", className: cn("text-lg leading-none font-semibold", className), ...props })));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (_jsx(DialogPrimitive.Description, { ref: ref, "data-slot": "dialog-description", className: cn("text-muted-foreground text-sm", className), ...props })));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };
