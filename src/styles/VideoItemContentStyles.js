import styled from 'styled-components'

export const ContentContainer = styled.div`
  margin-block: 0 5px;
`
// font size for this tittle assigned inside their respective component styles
export const Title = styled.p`
  font-weight: 600;
  color: var(--clr-para-accent);

  //below code restricts title to occupy max 2 lines
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ChannelName = styled.p`
  color: var(--clr-para);
  font-size: var(--fs-para1);

  @media (min-width: 576px) {
    margin-block: 5px;
  }
`

export const InnerContentContainer = styled.div`
  display: flex;
  gap: 0.7em;
  align-items: center;
  color: var(--clr-para);
  margin-block-end: 10px;

  & p {
    font-size: var(--fs-para2);
    position: relative;
  }

  & p:last-child {
    padding-left: 1em;
  }

  & p:last-child::before {
    --dot-size: 5px;
    content: ' ';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: var(--dot-size);
    height: var(--dot-size);
    border-radius: 50%;
    background-color: var(--clr-para);
  }
`
