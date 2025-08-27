import styled from "@emotion/styled";

export const Section = styled.div`
  padding: 10px;
  width: calc( 100% - 20px );
`;

export const Title = styled.h3`
    display: block;  
    padding: 5px 0;
    border-bottom: 2px solid ${({theme})=>theme.textColor[2]};
    color: ${({theme})=>theme.textColor[0]};
`;