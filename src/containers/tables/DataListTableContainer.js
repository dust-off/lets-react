/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { colors } from '../../core/Constants';
import StyledCard from '../../components/cards/StyledCard';
import DataListTable from '../../components/tables/DataListTable';

const TableHeader = styled.div`
    height: auto;
    background: ${colors.BAR};
    border-top: 2px solid ${colors.SLECTED_TEXT};
    border-bottom: .5px solid ${colors.SLECTED_TEXT};
    padding-left: 5%;
    display: flex;
    h2 {
      width: 50%;
    }
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
  setActiveItem :() => void;
  activeItem :number;
  listItems :object;
};

const EDMcontainer = (props :Props) => (
  <StyledCard>
    <TableHeader>
      <h2>Title</h2><h2>FQN</h2>
    </TableHeader>
    <Content>
      <DataListTable
          listItems={props.listItems}
          setActiveItem={props.setActiveItem}
          activeItem={props.activeItem} />
    </Content>
  </StyledCard>
);

const mapStateToProps = (state :object) => ({
  listItems: state.get(state.get('listItems')),
  activeItem: state.get('activeItem')
});

export default withRouter(
  connect(mapStateToProps, null)(EDMcontainer)
);

