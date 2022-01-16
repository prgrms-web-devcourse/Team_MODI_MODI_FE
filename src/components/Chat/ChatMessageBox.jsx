const ChatMessageBox = () => {
  return (
    <Stack direction="row" my={1}>
      <Avatar>조</Avatar>
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
          <Typography variant="micro" ml={1} sx={{ whiteSpace: 'nowrap' }}>
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
          <Typography variant="micro" ml={1} sx={{ whiteSpace: 'nowrap' }}>
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
          <Typography variant="micro" ml={1} sx={{ whiteSpace: 'nowrap' }}>
            오전 12: 24
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
