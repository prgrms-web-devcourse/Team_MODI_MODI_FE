import {
  IconButton,
  Box,
  Stack,
  Avatar,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import PageContainer from 'components/Common/PageContainer';
import PageContents from 'components/Common/PageContents';
import PageHeader from 'components/Common/PageHeader';
import { useParams } from 'react-router-dom';
import ChatMessageInput from 'components/Chat/ChatMessageInput';
import LetterAvatar from 'components/Chat/LetterAvatar';

const ChatRoomPage = () => {
  const { partyId } = useParams();
  console.log(partyId);

  return (
    <PageContainer>
      <PageHeader title="조용한 사슴의 넷플릭스">
        <IconButton sx={{ background: 'transparent' }}>
          <ContactSupportIcon />
        </IconButton>
      </PageHeader>
      <PageContents
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 'calc(100vh - 280px)',
        }}
      >
        <Stack
          direction="column-reverse"
          sx={{
            overflowY: 'auto',
          }}
        >
          <Stack direction="row-reverse" my={1}>
            <Box ml={1.5} mr={1}>
              <Stack direction="row-reverse" alignItems="flex-end" mb={1}>
                <Paper
                  elevation={0}
                  sx={{
                    px: 2,
                    py: 1,
                    bgcolor: '#B2CC16',
                    width: 'fit-content',
                  }}
                >
                  <Typography variant="small">메세지입니다.</Typography>
                </Paper>
                <Typography
                  variant="micro"
                  mx={1}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  오전 12: 24
                </Typography>
              </Stack>
            </Box>
          </Stack>

          <Stack direction="row-reverse" my={1}>
            <Box ml={1.5} mr={1}>
              <Stack direction="row-reverse" alignItems="flex-end" mb={1}>
                <Paper
                  elevation={0}
                  sx={{
                    px: 2,
                    py: 1,
                    bgcolor: '#B2CC16',
                    width: 'fit-content',
                  }}
                >
                  <Typography variant="small">메세지입니다.</Typography>
                </Paper>
                <Typography
                  variant="micro"
                  mx={1}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  오전 12: 24
                </Typography>
              </Stack>
            </Box>
          </Stack>

          <Stack direction="row-reverse" my={1}>
            <Box ml={1.5} mr={1}>
              <Stack direction="row-reverse" alignItems="flex-end" mb={1}>
                <Paper
                  elevation={0}
                  sx={{
                    px: 2,
                    py: 1,
                    bgcolor: '#B2CC16',
                    width: 'fit-content',
                  }}
                >
                  <Typography variant="small">메세지입니다.</Typography>
                </Paper>
                <Typography
                  variant="micro"
                  mx={1}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  오전 12: 24
                </Typography>
              </Stack>
            </Box>
          </Stack>

          <Stack direction="row" my={1}>
            <LetterAvatar>조용한 사슴</LetterAvatar>
            <Box ml={1.5} mr={1}>
              <Typography variant="smallB">조용한 사슴</Typography>
              <Stack direction="row" alignItems="flex-end" mb={1}>
                <Paper
                  elevation={0}
                  sx={{
                    px: 2,
                    py: 1,
                    bgcolor: '#eeeeee',
                    width: 'fit-content',
                  }}
                >
                  <Typography variant="small">메세지입니다.</Typography>
                </Paper>
                <Typography
                  variant="micro"
                  ml={1}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  오전 12: 24
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="flex-end" my={1}>
                <Paper
                  elevation={0}
                  sx={{
                    px: 2,
                    py: 1,
                    bgcolor: '#eeeeee',
                    width: 'fit-content',
                  }}
                >
                  <Typography variant="small">메세지입니다.</Typography>
                </Paper>
                <Typography
                  variant="micro"
                  ml={1}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  오전 12: 24
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="flex-end" my={1}>
                <Paper
                  elevation={0}
                  sx={{
                    px: 2,
                    py: 1,
                    bgcolor: '#eeeeee',
                    width: 'fit-content',
                  }}
                >
                  <Typography variant="small">메세지입니다.</Typography>
                </Paper>
                <Typography
                  variant="micro"
                  ml={1}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  오전 12: 24
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Divider
            sx={{
              py: 3,
            }}
          >
            <Typography variant="micro" component="div">
              2022년 1월 15일 토요일
            </Typography>
          </Divider>
          <Stack direction="row" my={1}>
            <LetterAvatar>귀여운 강아지</LetterAvatar>
            <Box ml={1.5} mr={1}>
              <Typography variant="smallB">귀여운 강아지</Typography>
              <Stack direction="row" alignItems="flex-end">
                <Paper
                  elevation={0}
                  sx={{
                    mt: 0.5,
                    px: 2,
                    py: 1,
                    bgcolor: '#eeeeee',
                    width: 'fit-content',
                  }}
                >
                  <Typography variant="small">
                    국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로
                    정한다. 일반사면을 명하려면 국회의 동의를 얻어야 한다. 이
                    헌법에 의한 최초의 대통령의 임기는 이 헌법시행일로부터
                    개시한다. 모든 국민은 인간으로서의 존엄과 가치를 가지며,
                    행복을 추구할 권리를 가진다. 국가는 개인이 가지는 불가침의
                    기본적 인권을 확인하고 이를 보장할 의무를 진.
                  </Typography>
                </Paper>
                <Typography
                  variant="micro"
                  ml={1}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  오전 12: 24
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <ChatMessageInput sx={{ zIndex: 1000 }} />
      </PageContents>
    </PageContainer>
  );
};

export default ChatRoomPage;
