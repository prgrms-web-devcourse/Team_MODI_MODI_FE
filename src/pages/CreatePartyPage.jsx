import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button, Box, MobileStepper, Container } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  StepOttSelect,
  StepPeriodSelect,
  StepRuleSelect,
  StepMemberSelect,
  StepShardInfoForm,
} from 'components/PartyCreate';
import useAsync from 'hooks/useAsync';
import { createNewParty, getOtt, getRules } from 'utils/api';
import { useOttInfoState } from 'contexts/OttInfoProvider';
import { calculateEndDate, calculateNextDate } from 'utils/calculateDate';
import { partyCreateFormater } from 'utils/formatting';
import theme from 'styles/theme.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import Alert from 'components/Common/Alert';

const CreatePartyPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down('md'));

  const [activeStep, setActiveStep] = useState(0);
  const [stepComplete, setStepComplete] = useState(false);
  const [complete, setComplete] = useState(false);

  const [newParty, setNewParty] = useState({
    ottId: undefined,
    ottName: '',
    grade: '',
    partyMemberCapacity: 1,
    startDate: calculateNextDate(),
    endDate: calculateEndDate(calculateNextDate(), 1),
    period: 1,
    mustFilled: null,
    ruleList: [],
    sharedId: '',
    sharedPassword: '',
    sharedPasswordCheck: '',
  });

  const { ottServices } = useOttInfoState();
  const [rules] = useAsync(getRules);
  const [selectedOtt, fetchSelectedOttAPI] = useAsync(
    getOtt,
    [newParty.ottId],
    [],
    true,
  );
  const [partyCreateAPIState, fetchPartyCreateAPI] = useAsync(
    createNewParty,
    [],
    [],
    true,
  );
  const {
    isLoading: partyCreateLoading,
    value: partyCreateValue,
    error: partyCreateError,
  } = partyCreateAPIState;

  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [checkSelectStartDate, setCheckSelectStartDate] = useState(true);

  // rule api 받아서 key,value 추가
  useEffect(() => {
    if (rules.value) {
      const ruleList = rules.value.rules.map(rule => ({
        ...rule,
        isSelected: false,
      }));
      setNewParty(currentParty => ({
        ...currentParty,
        ruleList,
      }));
    }
  }, [rules.value]);

  // ott선택 한 ott api 요청
  const handleSelectedOtt = useCallback(
    selectOttId => {
      fetchSelectedOttAPI(selectOttId);
    },
    [fetchSelectedOttAPI],
  );

  // 쿼리스트링 있다면 받아온
  useEffect(() => {
    const entryOtt = searchParams.get('ottId');
    handleSelectedOtt(entryOtt);
  }, [handleSelectedOtt, searchParams]);

  useEffect(() => {
    selectedOtt.value &&
      setNewParty(currentParty => ({
        ...currentParty,
        ottId: selectedOtt.value.ottId,
        ottName: selectedOtt.value.ottName,
        grade: selectedOtt.value.grade,
      }));
  }, [selectedOtt.value]);

  // 이전 버튼 클릭이벤트
  const handleBack = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }, []);

  // 다음 버튼 클릭이벤트
  const handleNext = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setStepComplete(false);
  }, []);

  // 생성 단계 작성 여부에 따라 다음, 완료 버튼 active 여부
  useEffect(() => {
    switch (activeStep) {
      case 0:
        if (newParty.ottId && newParty.ottName) {
          setStepComplete(true);
        }
        break;

      case 1:
        if (newParty.startDate && newParty.period) {
          setStepComplete(true);
        }
        break;

      case 2:
        if (newParty.ruleList.some(({ isSelected }) => isSelected)) {
          setStepComplete(true);
        } else {
          setStepComplete(false);
        }
        break;

      case 3:
        if (newParty.mustFilled !== null) {
          setStepComplete(true);
        }
        break;

      case 4: {
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
        break;
      }

      default:
        return;
    }
  }, [newParty, activeStep]);

  // 시작일자 이벤트함수
  const handleStartDate = (startDate, checkStartDate) => {
    if (checkStartDate) {
      const endDate = calculateEndDate(startDate, newParty.period);
      setNewParty(current => ({
        ...current,
        startDate,
        endDate,
      }));
    } else {
      setCheckSelectStartDate(false);
    }
  };

  // 기간설정 이벤트 함수
  const handlePeriod = period => {
    const endDate = calculateEndDate(newParty.startDate, period);
    setNewParty(currentParty => ({
      ...currentParty,
      period,
      endDate,
    }));
  };

  // rull 선택 이벤트 함수
  const handleSelectRules = newRuleList => {
    setNewParty(currentParty => ({
      ...currentParty,
      ruleList: newRuleList,
    }));
  };

  // 파티멤버 설정 이벤트 함수
  const handleCounter = partyMemberCapacity => {
    setNewParty(currentParty => ({
      ...currentParty,
      partyMemberCapacity,
    }));
  };

  // mustFilled 설정 이벤트 함수
  const handleConfirm = mustFilled => {
    setNewParty(currentParty => ({
      ...currentParty,
      mustFilled,
    }));
  };

  // 공유 계정 정보 입력 이벤트 함수
  const handleChangeSharedInfo = ({ name, value }) => {
    setNewParty(currentParty => ({
      ...currentParty,
      [name]: value,
    }));
  };

  // 완료버튼 클릭 이벤트 함수
  const handleSubmit = async e => {
    e.preventDefault();
    const submitData = partyCreateFormater(newParty);
    fetchPartyCreateAPI(submitData);
  };

  // 파티 생성 완료 여부 alert
  useEffect(() => {
    if (partyCreateValue) {
      setAlertType('createSuccess');
      setAlertMessage('파티원을 기다려보세요!');
      setIsOpenAlert(true);
    }
  }, [partyCreateValue]);
  useEffect(() => {
    if (partyCreateError) {
      setAlertType('fail');
      setAlertMessage('파티 생성에 실패하였습니다.');
      setIsOpenAlert(true);
    }
  }, [partyCreateError]);

  // 파티생성 완료/실패 알럿 닫기
  const handleCloseAlert = useCallback(() => {
    if (partyCreateValue) {
      const { partyId } = partyCreateValue;
      navigate(`/myParty/${partyId}`);
    }
    if (partyCreateError) {
      navigate('/');
    }
  }, [navigate, partyCreateValue, partyCreateError]);

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
          checkSelectStartDate={checkSelectStartDate}
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
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'block',
          background: '#fff',
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            minHeight: '100vh',
            pt: mdDownMatches ? '56px' : '72px',
            pb: 10,
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
                disabled={!stepComplete}
                onClick={handleNext}
              >
                다음 <KeyboardArrowRight />
              </StepperButton>
            ) : (
              <LoadingButton
                type="submit"
                size="large"
                variant="contained"
                loading={partyCreateLoading}
                disabled={!complete}
                sx={{ width: '48%' }}
              >
                완료
              </LoadingButton>
            )}
          </BottomButtonWrapper>
        </Container>
      </form>
      <Alert
        isOpen={isOpenAlert}
        type={alertType}
        messege={alertMessage}
        onClose={handleCloseAlert}
      />
    </>
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
  bottom: 20px;
  padding: 2;
  width: 100%;
  padding: 0 30px;
`;

export default CreatePartyPage;
