import React from 'react';
import {
  Navbar,
  Page,
  BlockTitle,
  Link,
  Icon,
  Card,
  CardContent,
  CardHeader,
  BlockHeader,
  Checkbox
} from 'framework7-react';

const ProductWraper = () => (
  <Page>
    <Navbar title="Data Table"></Navbar>
    <BlockTitle>Plain table</BlockTitle>
    <div class="data-table card">
      <table>
        <thead>
          <tr>
            <th class="label-cell color_cell">Family</th>
            <th class="label-cell color_cell">Nom Común</th>
            <th class="label-cell color_cell">Nom Científico</th>
          </tr>
        </thead>
        <tbody id="dynamicPopulate"></tbody>
      </table>
    </div>
  </Page>
);

export default ProductWraper;
