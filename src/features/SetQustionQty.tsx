import { useState } from "react";
import {
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Heading,
} from "@chakra-ui/react";

interface Props {
  defaultValue: number;
  max: number;
  min: number;
  step: number;
}
export function SetQuestionQty(p: Props) {
  const [sliderValue, setSliderValue] = useState<number>(p.defaultValue);

  const renderMarks = (): JSX.Element[] => {
    let marks = [];
    for (let index = p.min; index <= p.max; index += p.step) {
      marks.push(
        <SliderMark ml={-2} pt={4} key={index} value={index}>
          {index}
        </SliderMark>
      );
    }
    return marks;
  };

  return (
    <>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading as="h1" fontSize="3xl" mb={20}>
          How many questions?
        </Heading>
        <Slider
          value={sliderValue}
          maxWidth={400}
          max={p.max}
          min={p.min}
          step={p.step}
          colorScheme="yellow"
          aria-label="slider-ex-6"
          onChange={(val) => setSliderValue(val)}
        >
          {renderMarks()}
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Flex>
    </>
  );
}
