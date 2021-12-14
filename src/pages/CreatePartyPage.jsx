import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button, Box, MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  StepOttSelect,
  StepPeriodSelect,
  StepRuleSelect,
  StepMemberSelect,
  StepShardInfoForm,
} from 'components/PartyCreate';
import useAsync from 'hooks/useAsync';
import { getOtt, getRules } from 'utils/api';
import { useOttInfoState } from 'contexts/OttInfoProvider';
import { calculateEndDate, calculateNextDate } from 'utils/calculateDate';

const CreatePartyPage = () => {
  const { ottServices } = useOttInfoState();
  const [rules] = useAsync(getRules);
  const [activeStep, setActiveStep] = useState(0);
  const [stepComplete, setStepComplete] = useState(true);
  const [complete, setComplete] = useState(false);
  const [newParty, setNewParty] = useState({
    ottId: undefined,
    ottName: '',
    grade: '',
    partyMemberCapacity: 1,
    startDate: calculateNextDate(),
    endDate: calculateEndDate(new Date(), 1),
    period: 1,
    mustFilled: null,
    ruleList: [],
    sharedId: '',
    sharedPassword: '',
    sharedPasswordCheck: '',
  });
  const location = useLocation();
  const [currentOtt, loadOttInfo] = useAsync(
    getOtt,
    [newParty.ottId],
    [],
    true,
  );

  useEffect(() => {
    if (rules.value) {
      const ruleList = rules.value.rules.map(rule => ({
        ...rule,
        isSelected: false,
      }));
      setNewParty(current => ({
        ...current,
        ruleList,
      }));
    }
  }, [rules.value]);

  useEffect(() => {
    console.log(ottServices);
    if (location.search && !ottServices.length) {
      const currentOtt = location.search.split('=')[1];
      console.log(currentOtt, ottServices.length);
      const { ottId } = ottServices.find(ott => ott.ottNameEn === currentOtt);
      const { ottName } = ottServices.find(ott => ott.ottNameEn === currentOtt);
      handleSelectedOtt(ottId, ottName);
    }
  }, [ottServices]);

  useEffect(() => {
    currentOtt.value &&
      setNewParty(current => ({
        ...current,
        ottId: currentOtt.value.ottId,
        ottName: currentOtt.value.ottName,
        grade: currentOtt.value.grade,
      }));
  }, [currentOtt.value]);

  useEffect(() => {
    console.log('new', newParty);
  }, [newParty]);

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    nextStep();
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    if (activeStep === 0 || activeStep === 1 || newParty.mustFilled !== null) {
      return;
    }
    setStepComplete(true);
  };

  const nextStep = () => {
    stepComplete && setStepComplete(false);
  };

  const handleSelectedOtt = selectOttId => {
    nextStep();
    loadOttInfo(selectOttId);
  };

  const handleStartDate = startDate => {
    const endDate = calculateEndDate(startDate, newParty.period);
    setNewParty(current => ({
      ...current,
      startDate,
      endDate,
    }));
  };

  const handlePeriod = period => {
    const endDate = calculateEndDate(newParty.startDate, period);
    setNewParty(current => ({
      ...current,
      period,
      endDate,
    }));
  };

  const handleSelectRules = newRuleList => {
    setNewParty(current => ({
      ...current,
      ruleStateList: newRuleList,
    }));
  };

  const handleCounter = partyMemberCapacity => {
    setNewParty(current => ({
      ...current,
      partyMemberCapacity,
    }));
  };

  const handleConfirm = mustFilled => {
    nextStep();
    setNewParty(current => ({
      ...current,
      mustFilled,
    }));
  };

  const handleChangeSharedInfo = ({ name, value }) => {
    setNewParty(current => ({
      ...current,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { sharedId, sharedPassword, sharedPasswordCheck } = newParty;
    if (
      sharedId &&
      sharedPassword &&
      sharedPasswordCheck &&
      sharedPassword === sharedPasswordCheck
    ) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [newParty]);

  const handleSubmit = e => {
    e.preventDefault();
    // TODO API POST
  };

  const steps = [
    {
      step: (
        <StepOttSelect
          ottServices={ottServices}
          onSelectOtt={handleSelectedOtt}
          ottId={newParty.ottId}
        />
      ),
    },
    {
      step: (
        <StepPeriodSelect
          startDate={newParty.startDate}
          onSelectStartDate={handleStartDate}
          period={newParty.period}
          onSelectPeriod={handlePeriod}
        />
      ),
    },
    {
      step: (
        <StepRuleSelect
          rules={newParty.ruleList}
          onSelectRule={handleSelectRules}
        />
      ),
    },
    {
      step: (
        <StepMemberSelect
          memberCount={newParty.partyMemberCapacity}
          onCounterClick={handleCounter}
          mustFilled={newParty.mustFilled}
          onConfirm={handleConfirm}
        />
      ),
    },
    {
      step: (
        <StepShardInfoForm
          sharedId={newParty.sharedId}
          sharedPassword={newParty.sharedPassword}
          sharedPasswordCheck={newParty.sharedPasswordCheck}
          onChangeInfo={handleChangeSharedInfo}
        />
      ),
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'block',
        background: '#fff',
        padding: '60px 30px 0',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <StyledStepper
        variant="progress"
        steps={5}
        position="static"
        activeStep={activeStep}
      />

      {steps[activeStep].step}

      <BottomButtonWrapper>
        <StepperButton
          type="button"
          size="large"
          variant="outlined"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <KeyboardArrowLeft />
          이전
        </StepperButton>
        {activeStep !== 4 ? (
          <StepperButton
            type="button"
            size="large"
            variant="contained"
            disabled={stepComplete}
            onClick={handleNext}
          >
            다음 <KeyboardArrowRight />
          </StepperButton>
        ) : (
          <StepperButton
            type="submit"
            size="large"
            variant="contained"
            disabled={!complete}
          >
            완료
          </StepperButton>
        )}
      </BottomButtonWrapper>
    </form>
  );
};

const StyledStepper = styled(MobileStepper)`
  padding: 20px 0 0;
  background-color: transparent;
  span {
    width: 100%;
  }
`;

const StepperButton = styled(Button)`
  width: 48%;
`;

const BottomButtonWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2;
  width: 100%;
  padding: 30px;
`;

export default CreatePartyPage;
