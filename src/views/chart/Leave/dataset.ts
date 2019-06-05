import { View } from '@antv/data-set';

/* -------------------------------------------------------------
| Query from Model
|-------------------------------------------------------------*/
import models from '@/models';
const Entity: any = models.leave;
const fields: string[] = Entity.fieldsKeys();
const entity: string = Entity.entity;
const values: any[] = Entity.all();

/* -------------------------------------------------------------
| Transform with @antv/data-set tools
|-------------------------------------------------------------*/

const dv = new View({
  state: {
    entity,
    fields,
  },
}).source(values);

/* -------------------------------------------------------------
| Manipulate dv.rows with all connectors
| https://www.yuque.com/antv/g2-docs/api-transform
|
| dv.transform({
|   type: 'pick',
|   fields: [ 'date' ]
| });
|
| dv.transform({
|   type: 'map',
|   callback(row) {
|     row['month'] = row['date'] + ' month';
|     return row;
|   }
| });
|
| dv.transform({
|   type: 'fill-rows',
|   groupBy: [ 'month' ],
|   orderBy: [ 'date' ],
|   fillBy: 'order'
| });
|
| dv.transform({
|   type: 'pick',
|   fields: [ 'month' ]
| });
|
|-------------------------------------------------------------*/

export default dv;
