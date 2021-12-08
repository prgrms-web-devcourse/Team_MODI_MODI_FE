import { useEffect, useState } from 'react';
import { Button, Box, MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { styled } from '@mui/system';
import CreatePartyTitle from 'components/CreatePartyTitle';
import OttList from 'components/OttList';
import PartyStartDate from 'components/PartyStartDate';
import PartyPeriod from 'components/PartyPeriod';
import { ottServices, rules } from 'constants/dummyData';
import RuleList from 'components/RuleList';
import MemberCounter from 'components/MemberCounter';
import ConfirmDialog from 'components/ConfirmDialog';
import SharedInfoForm from 'components/SharedInfoForm';
import TermsList from './../components/TermsList';

const calculateEndDate = (startDate, period) => {
  const endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth() + period,
    startDate.getDate() - 1,
  );

  return endDate;
};

const CreatePartyPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [nextDisable, setNextDisable] = useState(true);
  const [complete, setComplete] = useState(false);
  const [newParty, setNewParty] = useState({
    ottId: undefined,
    ottName: '',
    grade: '',
    memberCapacity: 1,
    startDate: new Date(),
    endDate: calculateEndDate(new Date(), 1),
    period: 1,
    mustFilled: null,
    ruleStateList: [],
    sharedId: '',
    sharedPassword: '',
    sharedPasswordCheck: '',
  });

  useEffect(() => {
    const ruleStateList = [];
    rules.map(({ ruleId, ruleName }) => {
      ruleStateList.push({
        ruleId,
        ruleName,
        isSelected: false,
      });

      return false;
    });
    setNewParty(current => ({
      ...current,
      ruleStateList,
    }));
  }, []);

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    nextStep();
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    if (activeStep === 0 || activeStep === 1 || newParty.mustFilled !== null) {
      return;
    }
    setNextDisable(true);
  };

  const nextStep = () => {
    nextDisable && setNextDisable(false);
  };

  const handleSelectedOtt = (ottId, ottName) => {
    nextStep();
    setNewParty(current => ({
      ...current,
      ottId,
      ottName,
      grade: '프리미엄',
    }));
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

  const handleCounter = memberCapacity => {
    setNewParty(current => ({
      ...current,
      memberCapacity,
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

  const getStepContent = stepNumber => {
    switch (stepNumber) {
      case 0:
        return (
          <>
            <CreatePartyTitle subTitle="어떤 서비스를 함께 이용하고 싶나요?" />
            <OttList
              ottServices={ottServices}
              onSelectOtt={handleSelectedOtt}
              currentOttId={newParty.ottId}
            />
          </>
        );
      case 1:
        return (
          <>
            <CreatePartyTitle subTitle="얼마 동안 함께 이용하고 싶나요?" />
            <PartyStartDate
              initialStartDate={newParty.startDate}
              onSelectStartDate={handleStartDate}
            />
            <PartyPeriod
              initialPeriod={newParty.period}
              onSelectPeriod={handlePeriod}
            />
          </>
        );
      case 2:
        return (
          <>
            <CreatePartyTitle subTitle="이 파티의 규칙은 어떻게 지정할까요?" />
            <RuleList
              rules={newParty.ruleStateList}
              onSelectRule={handleSelectRules}
            />
          </>
        );
      case 3:
        return (
          <>
            <CreatePartyTitle subTitle="파티에 몇 명을 모집하고 싶나요?" />
            <MemberCounter
              member={newParty.memberCapacity}
              onClick={handleCounter}
            />
            <ConfirmDialog
              initialMustFilled={newParty.mustFilled}
              onConfirm={handleConfirm}
            />
          </>
        );
      case 4:
        return (
          <>
            <CreatePartyTitle subTitle="파티에서 사용하실 서비스의 계정 정보를 입력해주세요." />
            <SharedInfoForm
              sharedId={newParty.sharedId}
              sharedPassword={newParty.sharedPassword}
              sharedPasswordCheck={newParty.sharedPasswordCheck}
              onChangeInfo={handleChangeSharedInfo}
            />
            <TermsList />
          </>
        );
      default:
        return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'block',
        background: '#fff',
        padding: '0 30px',
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

      {getStepContent(activeStep)}

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
            disabled={nextDisable}
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
