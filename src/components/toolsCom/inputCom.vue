<template>
<div>
    <div style="margin-top: 0px;">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="测试功能1" value="1"></el-option>
                <el-option label="测试功能2" value="2"></el-option>
                <el-option label="测试功能3" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</div>
</template>

<style>
  .el-select .el-input {
    width: 140px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>
