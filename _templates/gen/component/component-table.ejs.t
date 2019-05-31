---
to: 'src/views/<%= h.changeCase.pascal(model) %>/components/<%= h.changeCase.pascal(model) %>Table.tsx'
---
<%
const EntityName = h.changeCase.camel(model)
const ModelName = h.changeCase.pascal(model)
const modelTableName = ModelName + 'Table'
const modelFormName = ModelName + 'Form'
%>import { Component, Vue } from 'vue-property-decorator';
import { Tag } from 'ant-design-vue';
import { tableList, FilterFormList, Opreat } from '@/interface';
import city from '@/utils/city';
import './index.less';

@Component({
  name: '<%= modelTableName %>',
  components: {
    'a-tag': Tag,
  },
})
export default class <%= modelTableName %> extends Vue {
  modelName: string = '<%= EntityName %>'
  
  data: any[] = []

  pageParams: object = {
    pageNum: 1,
    pageSize: 100,
    page: true
  }

  filterParams: any = {
    name: '',
    address: [],
    createtime: [],
  };

  BackParams: any = {
    code: 'data.result.resultCode',
    codeOK: 0,
    message: 'data.result.resultMessage',
    data: 'data.entity',
    columns: 'config.params.columns',
    total: 'config.params.pageParams.total',
  };

  outParams: any = {};

  filterList: FilterFormList[] = [
    {
      key: 'name',
      label: 'name',
      type: 'input',
      placeholder: 'Seach Name',
    },
    {
      key: 'address',
      label: 'address',
      type: 'cascader',
      placeholder: 'Seach address',
      options: city,
    },
    {
      key: 'createtime',
      label: 'Createtime',
      type: 'datetimerange',
      placeholder: ['start date', 'end date'],
      value: ['startTime', 'endTime'],
    },
  ];

  tableList: tableList[] = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    }
  ];

  opreat: Opreat[] = [
    {
      key: 'edit',
      rowKey: 'id',
      color: 'blue',
      text: '编辑',
      roles: true,
    },
    {
      key: 'delete',
      rowKey: 'id',
      color: 'red',
      text: '删除',
      roles: true,
      msg: '确定删除？',
    },
  ];

  title: string = 'Add <%= ModelName %>';

  visible: boolean = false;

  modelType: string = 'add';

  editData: object = {};

  async handleDelete (row) {
    console.log('Deleting ... ')
    await this.$http({
      url: `/${this.modelName}`,
      method: 'delete',
      data: row.id
    })
    setTimeout(() => this.success(), 500)
  }

  handleEdit (row) {
    this.$log.suc('Editing ... ');
    this.$router.replace({
      name: '<%= modelFormName %>',
      params: {
        id: row.id
      }
    })
  }

  handleCreate () {
    this.$log.suc('Creating ... ');
    this.$router.replace({
      name: '<%= modelFormName %>'
    })
  }

  handleExport () {
    this.$log.suc('Exporting ... ')
    this.$router.replace({
      name: 'ExportHelper',
      params: {
        modelName: this.modelName,
        data: JSON.stringify({ ids }),
      },
    })
  }

  handleSearch(params) {
    this.$log.suc('Searching from MemberTable ... ', params);
  }

  handleRemove (row) {
    this.$confirm({
      title: '警告',
      content: `真的要删除 ${row.id} 吗?`,
      okText: '删除',
      okType: 'danger',
      cancelText: '取消',
      onOk: () => {
        this.$log.suc('OK');
        this.handleDelete(row);
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
        }).catch(() => console.log('Oops errors!'))
      },
      onCancel: () => {
        console.log('Cancel')
      }
    })
  }

  genderRender(text: any) {
    return <a-tag color={text ? 'blue' : 'purple'}>{text ? 'Male' : 'Female'}</a-tag>;
  }

  tableClick(key: string, row: any) {
    switch (key) {
      case 'edit':
        this.handleEdit(row);
        break;
      default:
        this.handleDelete(row);
        break;
    }
  }

  addWithModal() {
    this.title = 'Add Member';
    this.modelType = 'add';
    this.visible = true;
    this.editData = {};
    this.$router.replace({
      name: '<%= modelFormName %>'
    })
  }

  closeModal() {
    this.visible = false;
    this.editData = {};
  }

  success() {
    this.visible = false;
    const Table: any = this.$refs.<%= ModelName %>InfoTable;
    this.editData = {};
    Table.reloadTable();
  }

  render() {
    return (
      <div class="baseInfo-wrap">
        <filter-table
          ref="<%= ModelName %>InfoTable"
          tableList={this.tableList}
          filterList={this.filterList}
          filterGrade={[]}
          scroll={{ x: 900 }}
          url={'/<%= EntityName %>/fetch'}
          filterParams={this.filterParams}
          outParams={this.outParams}
          addBtn={true}
          exportBtn={true}
          dataType={'json'}
          rowKey={'id'}
          opreat={this.opreat}
          fetchType={'get'}
          backParams={this.BackParams}
          on-menuClick={this.tableClick}
          on-add={this.handleCreate}
          on-export={this.handleExport}
          on-search={this.handleSearch}
        />
      </div>
    );
  }
}