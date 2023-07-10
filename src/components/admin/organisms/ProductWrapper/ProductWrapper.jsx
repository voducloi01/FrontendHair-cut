import React from 'react';
import { Navbar, Page, BlockTitle } from 'framework7-react';

const ProductWrapper = () => (
  <Page>
    <Navbar title="Data Table"></Navbar>
    <BlockTitle>Plain table</BlockTitle>
    <div className="data-table card">
      <table>
        <thead>
          <tr>
            <th className="label-cell color_cell">Family</th>
            <th className="label-cell color_cell">Nom Común</th>
            <th className="label-cell color_cell">Nom Científico</th>
          </tr>
        </thead>
        <tbody id="dynamicPopulate"></tbody>
      </table>
    </div>
  </Page>
);

export default ProductWrapper;
