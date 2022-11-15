import styled from 'styled-components';

const FieldListWrapper = styled.div`
  width: 100%;
  .row {
    display: flex;
    gap: 5rem;
  }
  .field_item {
    margin-bottom: 2rem;
    color: white;
    input {
      color: white;
      width: 100%;
      background: #1c212f;
      padding: 2rem;
      border-radius: 5px;
    }
  }
`;
export default FieldListWrapper;
