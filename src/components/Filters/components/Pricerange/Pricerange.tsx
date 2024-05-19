import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FilterProps } from "@/types/typs";
import { formatCurrency } from "@/utils/monthDAys";

type PriceRangeFilters = {
  filters: FilterProps;
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
};

const Pricerange = ({ filters, setFilters }: PriceRangeFilters) => {
  // const minPrice = Math.min(filters.price.range[0], filters.price.range[1]);
  // const maxPrice = Math.max(filters.price.range[0], filters.price.range[1]);
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between">
              <span>{formatCurrency(filters.price.range[0])}</span>
              <span>{formatCurrency(filters.price.range[1])}</span>
            </div>
          </AccordionContent>
          <AccordionContent className="flex items-center ">
            <Slider
              onValueChange={(range) => {
                const [newMin, newMax] = range;
                setFilters((prev) => ({
                  ...prev,
                  price: {
                    range: [newMin, newMax],
                  },
                }));
              }}
              className="text-[#1B96D6] mt-2"
              defaultValue={[33, 70]}
              value={filters.price.range}
              min={0}
              max={500000}
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
              <span>{filters.departureTime.range[0]}</span>
              <span>{filters.departureTime.range[1]}</span>
            </div>
          </AccordionContent>
          <AccordionContent className="flex items-center ">
            <Slider
              className="text-[#1B96D6] mt-2"
              onValueChange={(range) => {
                const [newMin, newMax] = range;
                setFilters((prev) => ({
                  ...prev,
                  departureTime: {
                    range: [newMin, newMax],
                  },
                }));
              }}
              defaultValue={[0, 12]}
              value={filters.departureTime.range}
              min={0}
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

// "PT7H"; fix time showing undefined
