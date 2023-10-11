import { Flex, Image, Box } from "@chakra-ui/react";
import { useState } from "react";
import logoImg from "./assets/logoTS.png";
import bubble from "./assets/bubble.png";
import "../global.css";
import { SetQuestionQty } from "./features/SetQustionQty";

enum Step {
  SetQuestionQty,
  SetQuestionCategory,
  SetQuestionDifficulty,
  Play,
  Score,
}

export function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [step, setStep] = useState<Step>(Step.SetQuestionQty);
  const header = (
    <Flex justify="center">
      <Image h="24" src={logoImg} />
    </Flex>
  );

  const renderScreenByStep = () => {
    switch (step) {
      case Step.SetQuestionQty:
        return <SetQuestionQty max={30} min={5} step={5} defaultValue={10} />;
      case Step.SetQuestionCategory:
        return <></>;
      case Step.SetQuestionDifficulty:
        return <></>;
      case Step.Play:
        return <></>;
      case Step.Score:
        return <></>;
      default:
        return null;
    }
  };
  return (
    <Box py={"10"} h="100%">
      {header}
      <Image
        src={bubble}
        position={"absolute"}
        zIndex={-1}
        right={-120}
        top={100}
      />
      <Box mt={100}>{renderScreenByStep()}</Box>
    </Box>
  );
}
