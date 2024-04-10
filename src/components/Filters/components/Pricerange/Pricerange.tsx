import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricerange = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between">
              <span>₦1233</span>
              <span>₦1233</span>
            </div>
          </AccordionContent>
          <AccordionContent className="flex items-center ">
            <Slider
              className="text-[#1B96D6] mt-2"
              defaultValue={[33, 70]}
              min={2}
              max={100}
              step={5}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="departure">
          <AccordionTrigger>Departure</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between">
              <span>00:00</span>
              <span>24:00</span>
            </div>
          </AccordionContent>
          <AccordionContent className="flex items-center ">
            <Slider
              className="text-[#1B96D6] mt-2"
              defaultValue={[0, 12]}
              min={2}
              max={24}
              step={1}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Pricerange;
