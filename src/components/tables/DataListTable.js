/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
// import lattice from 'lattice';
// import StyledCard from '../cards/StyledCard';
import property from '../../../testData/property.json';

console.log(property);

const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: normal;
    padding: 8px;
    border-top: 2px solid #135;
    &:hover {
      background: lightgrey;
    }
`;

const TitleLeft = styled.div`
  width: 70%;
  text-overflow: clip;
  white-space: nowrap;
  overflow: hidden;
`;

const DescribeRight = styled.div`
  width: 30%;
  text-overflow: clip;
  white-space: nowrap;
  overflow: hidden;
`;

// const Divider = styled.div`
//   width: 100%;
//   height: 3px;
//   background: black;
//   &:hover {
//     background: linear-gradient(to left, #BA5F9E, #A96AA4, #6383BD, #3F8AC6, #3B95D4);
//   }
// `;

export default function DataListTable() {
  return (
    <div>
      {property.map(item => (
        <div>
          <ListItem key={item.id}>
            <TitleLeft>
              <section>
                {item.title}
              </section>
            </TitleLeft>
            <DescribeRight>
              <section>
                test
              </section>
            </DescribeRight>
          </ListItem>
        </div>
      ))}
    </div>
  );
}
