<template>
    <div>
      <el-form label-position="right" :rules="rules" label-width="80px" ref="formLabelAlign" :model="formLabelAlign">
        <el-upload
          class="avatar-uploader"
          action="api/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <el-form-item label="名称" prop="userName">
          <el-input v-model="formLabelAlign.userName"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="address">
          <el-input v-model="formLabelAlign.address"></el-input>
        </el-form-item>

        <el-button type="danger" @click="add('formLabelAlign')" round>提交</el-button>
      </el-form>
    </div>
</template>

<script>
  import axios from "axios";
    export default {
      name: "",
      data() {
        return {
          labelPosition: 'right',
          formLabelAlign: {
            userName: '',
            address: '',
            id:'',
            imageurl:'',
          },
          imageUrl: '',

        rules: {
          userName: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
            address: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }
      };
      },
      mounted(){
       var a =  this.$route.params.id
       //通过id 去后台进行查询数据

        axios.get("/api/findById/"+a).then(res=>{
          this.formLabelAlign=res.data;
        })


        this.formLabelAlign = {"name":"张三","region":"23","type":"123"}
      },
      methods:{
        add:function (formName) {

            //验证
          this.$refs[formName].validate((valid) => {
            if (valid) {
              //提交form表单
              axios.post("/api/update",this.formLabelAlign).then(res=>{
                if (res.data==1){
                  this.$router.push("/")
                }else {
                  alert("修改失败")
                }
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });



          console.log(this.formLabelAlign)
        },
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
          this.formLabelAlign.imageurl=res;
          alert(this.imageUrl)
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
      }
    }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
