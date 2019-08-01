import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import lodash from 'lodash';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import {deleteMessage} from '../redux/actions';

const cardColors = {
  error: '#F56236',
  warning: '#FCE788',
  info: '#88FCA3',
}

const StyledCard = styled(ListItem)`
  background-color: ${props => cardColors[props.type]}
`

const SubList = ({type}) => {
  const dispatch = useDispatch()
  const dispatchDeleteOneMessage = (message, priorityLevel) =>
    dispatch(deleteMessage(message, priorityLevel))
  const messageList = useSelector(state => state[`${type}Messages`]);

  return (
    <Grid item xs={4}>
      <h3>{lodash.capitalize(type)} ({messageList.length} Messages)</h3>
      <List>
        {messageList.map(msg =>
          <StyledCard type={msg.priorityLevel} key={`${type}-${msg.message}`}>
            <ListItemText>
              {msg.message}
              <IconButton
                onClick={() => dispatchDeleteOneMessage(msg.message, type)}
              >
                <Icon><CloseIcon /></Icon>
              </IconButton>
            </ListItemText>
          </StyledCard>
        )}
      </List>
    </Grid>
  )
}

export default SubList;
