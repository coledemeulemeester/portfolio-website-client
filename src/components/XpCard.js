const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: ${(props) => `1px solid ${props.theme.border.cool}`};
`
const XpCard = ({
  title,
  date,
  description,
  comments,
  likes,
  views,
  actions,
}) => (
  <StyledContainer>
    {/* <StyledPhoto src="https://junilearning.com/static/juni_logo_preview-101e7872d58e53d7323d24502e7ff973.png" /> */}
    <Title>{title}</Title>
    <Date>{date}</Date>
    <Description>{description}</Description>
    <Actions>
      {actions.map(({ label }) => (
        <Action>{label}</Action>
      ))}
    </Actions>
  </StyledContainer>
)