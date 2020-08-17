<template>
    <div>
      <el-form label-position="right" label-width="80px" :model="ruleForm">
        <el-form-item label="用户名">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]"
        >
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sendMail()">发送验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
      <!--  <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "",
      data(){
       /* var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
*/
        return{
          ruleForm: {
           /* pass: '',
            checkPass: '',*/
            userName: '',
            email:'',
            code:'',
            password:''
          },
         /* rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ]
          }*/
        }
      },
      methods: {
        /*submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }*/
        submitForm(formName){
         axios.post("/api/registry",this.ruleForm).then(res=>{
            if (res.data==1){
              alert("注册成功")
            }
            if (res.data==2){
              alert("验证码错误")
            }
         })
        },
        sendMail:function () {
          axios.get("/api/sendMail?mail="+this.ruleForm.email).then(res=>{
            if (res.data==1){
              alert("发送成功")
            }
          })
        }
      }

    }
</script>

<style scoped>

</style>
