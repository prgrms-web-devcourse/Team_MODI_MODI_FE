import theme from 'styles/theme';

const terms = [
  '본인 명의의 구독 서비스 계정 정보를 정확하게 입력하여 주세요.',
  '파티 생성 시 공유할 서비스 계정 내 이용권이 정확히 결제되어 있는지 확인해 주세요.',
  'SNS 아이디(네이버, 카카오, 구글, 페이스북 등)로 연결된 계정은 타인과 공유시 문제가 생길 수 있으니, 꼭 확인 후 공유해 주세요.',
  '파티원과 공유 가능한 안전한 비밀번호로 지정해 주세요.',
];

const { text } = theme.palette;

const TermsList = () => {
  return (
    <ul
      style={{
        paddingLeft: 16,
        margin: 0,
        fontSize: 12,
        color: text.secondary,
        wordBreak: 'keep-all',
      }}
    >
      {terms.map((term, index) => (
        <li
          key={index}
          style={{
            margin: '5px 0px',
          }}
        >
          {term}
        </li>
      ))}
    </ul>
  );
};

export default TermsList;
