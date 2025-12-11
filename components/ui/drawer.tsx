"use client"

import * as React from "react"
import {
  Sheet as DrawerPrimitiveRoot,
  SheetTrigger as DrawerPrimitiveTrigger,
  SheetPortal as DrawerPrimitivePortal,
  SheetClose as DrawerPrimitiveClose,
  SheetOverlay as DrawerPrimitiveOverlay,
  SheetContent as DrawerPrimitiveContent,
  SheetTitle as DrawerPrimitiveTitle,
  SheetDescription as DrawerPrimitiveDescription,
} from "./sheet"

import { cn } from "@/lib/utils"

interface DrawerProps extends React.ComponentProps<typeof DrawerPrimitiveRoot> {
  shouldScaleBackground?: boolean
}

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: DrawerProps) => (
  // Note: shouldScaleBackground is not used in the Sheet-based implementation.
  // It is accepted for compatibility with previous vaul-based API.
  <DrawerPrimitiveRoot {...props} />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitiveTrigger

const DrawerPortal = DrawerPrimitivePortal

const DrawerClose = DrawerPrimitiveClose

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitiveOverlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitiveOverlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitiveOverlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitiveOverlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitiveContent>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitiveContent>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitiveContent
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitiveContent>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitiveTitle>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitiveTitle>
>(({ className, ...props }, ref) => (
  <DrawerPrimitiveTitle
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitiveTitle.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitiveDescription>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitiveDescription>
>(({ className, ...props }, ref) => (
  <DrawerPrimitiveDescription
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitiveDescription.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
