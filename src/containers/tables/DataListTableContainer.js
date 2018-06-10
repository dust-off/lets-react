/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import reduxActions from '../../core/redux/ReduxActions';
import StyledCard from '../../components/cards/StyledCard';
import DataListTable from '../../components/tables/DataListTable';

const TableHeader = styled.div`
    height: 30px;
    background: grey;
`;

const Content = styled.div`
    height: 600px;
    top: 50px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow-y: scroll;
`;

type Props = {
  actions :{
    clickItem :() => void;
    setActiveItem :() => void;
  };
  activeItem :number;
  listItems :object;
};

const EDMcontainer = (props :Props) => (
  <StyledCard>
    <TableHeader />
    <Content>
      <DataListTable
          listItems={props.listItems}
          setActiveItem={props.actions.setActiveItem}
          activeItem={props.activeItem} />
    </Content>
  </StyledCard>
);

function mapDispatchToProps(dispatch :Function) :Object {
  const actions = {
    setActiveItem: reduxActions.setActiveItem
  };

  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const mapStateToProps = (state :object) => ({
  listItems: state.get(state.get('listItems')),
  activeItem: state.get('activeItem')
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EDMcontainer)
);

