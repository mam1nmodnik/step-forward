import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from "~/components/ui/accordion"


export default function About(){
    return (
        <div class="mt-[11.313rem] select-none mb-[100]">
            <h1 class="Text-inter-98px ">Пару слов о нас</h1>
            <div class="flex flex-col gap-[0.75rem] mt-[1.5rem] w-full">
            <Accordion multiple={false} collapsible class="bg-my-newBlack w-full px-[2rem] rounded-[3rem] cursor-pointer">
                <AccordionItem value="item-1" class="">
                    <AccordionTrigger> 
                        <div class="flex items-center gap-[1.125rem]">
                            <img src="/img/svg/iconSelect.svg" alt="" srcset=""  class="w-[2.778rem] h-[3.068rem]"/>
                            <p class="Text-inter-36px-normal">Heading</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion multiple={false} collapsible class="bg-my-newBlack w-full px-[2rem] rounded-[3rem] cursor-pointer">
                <AccordionItem value="item-1" class="">
                    <AccordionTrigger> 
                        <div class="flex items-center gap-[1.125rem]">
                            <img src="/img/svg/iconSelect.svg" alt="" srcset="" class="w-[2.778rem] h-[3.068rem]"/>
                            <p class="Text-inter-36px-normal">Heading</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    )
}