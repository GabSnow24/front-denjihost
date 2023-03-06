import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import HookForm from "./HookForm";

const steps = [{ label: "Nome" }, { label: "Repositorio" }, { label: "Deploy" }]
export const ClickableSteps = () => {
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  })

  return (
    //CHANGE AFTER TO IDENTIFY ERROR
    <Flex flexDir="column" width="100%">
      <Steps onClickStep={(step: number) => setStep(step)} activeStep={activeStep} mb="20px">
        {steps.map(({ label }, index) => (
          <Step label={label} key={label}>
            <Box><HookForm projectInfos={[{projectName:label, placeHolder:label}, ...label === "Nome" ? [{projectName:"Porta", placeHolder:"Porta do servidor"}, {projectName:"Tipo", placeHolder:"Tipo de projeto"} ] : [], ]} showSubmit={label === "Repositorio"} /></Box>
          </Step>
        ))}
      </Steps> 
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Woohoo! All steps completed!
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end" mt="10px">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Voltar
          </Button>
          {activeStep === steps.length - 1 ? null :           
          <Button size="sm" onClick={nextStep}>
          Próximo
          </Button>}
        </Flex>
      )}
    </Flex>
  )
}