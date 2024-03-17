import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Accordion as AccordionPrimitive } from "@kobalte/core"
import { TbChevronDown } from "solid-icons/tb"

import { cn } from "~/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem: Component<AccordionPrimitive.AccordionItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <AccordionPrimitive.Item class={cn("border-b", props.class)} {...rest} />
}

const AccordionTrigger: Component<AccordionPrimitive.AccordionTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <AccordionPrimitive.Header class="flex">
      <AccordionPrimitive.Trigger
        class={cn(
          "flex flex-1 items-center justify-between py-6 font-medium transition-all [&[data-expanded]>svg]:rotate-180",
          props.class
        )}
        {...rest}
      >
        {props.children}
        <TbChevronDown class="size-14 shrink-0 transition-transform duration-200" color="#FFFFFF"/>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

const AccordionContent: Component<AccordionPrimitive.AccordionContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <AccordionPrimitive.Content
      class={cn(
        "animate-accordion-up overflow-hidden text-sm transition-all data-[expanded]:animate-accordion-down",
        props.class
      )}
      {...rest}
    >
      <div class="pb-4 pt-0">{props.children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
