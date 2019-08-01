import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SubList from './sub-list';
import ErrorSnackbar from './error-snackbar';
import Api from '../api';
import {
  addMessage,
  deleteAllMessages,
  toggleIsGeneratingMessages
} from '../redux/actions';

// Init Api, pass faux messageCallback to Api, breaking without it.
const api = new Api({messageCallback: () => {}})

const StyledContainer = styled(Container)`
  font-family: Montserrat;
`;

const TopMarginContainer = styled.div`
  margin-top: 5vh;
`;

const MessageList = () => {
  const dispatch = useDispatch()
  const dispatchToggleGenerator = () => dispatch(toggleIsGeneratingMessages())
  const dispatchDeleteMessages = () => dispatch(deleteAllMessages())
  const isGeneratingMessages = useSelector(state => state.isGeneratingMessages)

  api.messageCallback = (message) => dispatch(addMessage(message));

  const toggleMessageGeneration = () => {
    dispatchToggleGenerator()
    isGeneratingMessages
      ? api.stop()
      : api.start()
  }

  useEffect(() => {
    api.start();

    return () => {
      api.stop();
    }
  }, []);

  return (
    <StyledContainer>
      <ErrorSnackbar />
      <TopMarginContainer>
        <Button
          variant="contained"
          onClick={toggleMessageGeneration}
        >
          {isGeneratingMessages ? 'Stop Messages' : 'Start Messages'}
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatchDeleteMessages()}
        >
          Clear
        </Button>
        <Grid container>
          <SubList type='error' />
          <SubList type='warning' />
          <SubList type='info' />
        </Grid>
      </TopMarginContainer>
    </StyledContainer>
  );
};

export default MessageList
