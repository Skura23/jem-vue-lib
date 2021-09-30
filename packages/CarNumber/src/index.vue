<template>
  <div class="comp-CarNumber">
    <div class="wra0">
      <div
        class="_row0"
        @click="openPanel"
      >
        <span>车牌号</span> <input
          type="text"
          class="_inp"
          placeholder=" 请输入车牌号"
          disabled
          :value="c_inpText"
        >
      </div>
      <div
        class="_row1"
        v-show="show_panel"
      >
        <div class="_box _box0">
          <div class="_key0wra">
            <div
              class="_key _key0"
              v-text="item"
              v-for="item in provArr"
              :key="item"
              @click="chooseProv(item)"
            ></div>
          </div>

          <div
            class="_key1wra"
            v-show="show_key1wra"
          >
            <div class="mt10"></div>
            <div
              class="_key _key1"
              v-for="(item, index) in numCharArr"
              :key="item"
              @click="chooseNumChar(item)"
            >
              <!-- <img
              v-if="index == numCharArr.length-1"
              style="vertical-align: -2px;"
              src="./assets/0.png"
              alt=""
            > -->
              <span>{{item}}</span>
            </div>

            <div
              class="_key "
              @click="delChar()"
            >
              <img
                style="vertical-align: -2px;"
                src="../../assets/0.png"
                alt=""
              >
            </div>
          </div>

          <div class="_btns mt10">
            <div
              class="_0 _key"
              @click="closePanel"
            >关闭</div>
            <!-- <div class="_1 _key">确定</div> -->
          </div>
        </div>


        <!-- <div class="_box _box1"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 车牌号组件.
   * @displayName CarNumber
   */
  // util js
  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  // import TableList from '@/components/TableList'
  export default {
    name: 'car-number',
    // model: {
    //   prop: 'text', // 不一定非要是value
    //   event: 'changetext' // 不一定非要是input
    // },
    props: {
      //此处一定要用value
      /**
       * 车牌号初始值. 用.sync同步值到父组件
       */
      inpText: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        // message: 'Hello Vue!'
        show_panel: false,
        show_key1wra: false,
        c_inpText: this.inpText,
        provArr: ['京', '沪', '津', '渝', '冀', '豫', '云', '辽', '黑', '湘', '皖', '鲁', '苏', '浙', '赣', '鄂', '桂', '甘',
          '晋', '蒙', '陕', '吉', '闽', '贵', '粤', '川', '青', '藏', '琼', '宁', '新', '港', '澳', '台', '使', '领', '学'
        ],
        numCharArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        ],
      }
    },
    created() {
      console.log('test');
    },
    watch: {
      c_inpText: function (newinpText, oldinpText) {
        this.$emit('update:inpText', newinpText)
        // if (newinpText.length > 1) {
        //   return
        // }
        if (newinpText.charAt(0).match(/[\u3400-\u9FBF]/)) {
          this.show_key1wra = true
        }
        // if (newinpText.length == 1) {
        //   this.show_key1wra = true
        // }
      }
    },
    methods: {
      openPanel() {
        console.log(1);
        this.show_panel = true
      },
      closePanel() {
        this.show_panel = false
      },
      chooseProv(item) {
        console.log(item, 'chooseProv');
        if (this.c_inpText.length == 0) {
          this.c_inpText = item
        } else {
          this.c_inpText = setCharAt(this.c_inpText, 0, item)
        }
        // if (this.c_inpText.length==0) {
        //   this.c_inpText = item
        // } else{
        //   if (this.c_inpText.charAt(0).match(/[\u3400-\u9FBF]/)) {

        //   }

        // }
      },
      chooseNumChar(item) {
        console.log(item, 'chooseNumChar');
        if (this.c_inpText.length == 8) {
          return
        }

        this.c_inpText += item
      },
      delChar() {
        if (this.c_inpText.length == 1 || this.c_inpText.length == 0) {
          return false
        }
        this.c_inpText = this.c_inpText.slice(0, -1)
      },
    },
    mounted() {

    },
  }
</script>


<style
  scoped
  lang="scss"
>
  /* global overrides */
  textarea:focus,
  input:focus {
    outline: none;
  }

  /* region util class */
  .mt10 {
    margin-top: 10px;
  }

  /* endregion util class */

  .comp-CarNumber {
    font-size: 14px;

    .wra0 {
      margin: 100px;
      text-align: left;
    }
  }



  ._row0 {
    display: inline-block;
  }

  .comp-CarNumber .wra0 ._inp {
    width: 242px;
    height: 40px;
    border: 1px solid #C3CBD9;
    opacity: 1;
    border-radius: 5px;
    outline: none;
  }

  .comp-CarNumber .wra0 ._box {
    padding: 10px;
    padding-right: 0;
    margin-top: 15px;
    max-width: 350px;
    /* height: 198px; */
    background: #F1F3FB;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 6px 12px rgba(51, 60, 79, 0.1);
    opacity: 1;
  }

  .comp-CarNumber .wra0 ._box ._key {
    display: inline-block;
    cursor: pointer;
    margin: 0 5px 5px 0;
    padding: 5px;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(51, 60, 79, 0.1);
    opacity: 1;
    border-radius: 4px;
  }

  .comp-CarNumber .wra0 ._box ._key:active {
    background-color: #F8B62B;
  }

  .comp-CarNumber .wra0 ._box ._key1 {
    padding: 5px 10px;

  }

  ._btns {}

  ._btns ._0 {
    padding: 7px 23px;
  }

  ._btns ._1 {
    padding: 7px 23px;
  }
</style>

<docs lang="md">
车牌号组件
```jsx
<car-number>Push Me</car-number>
```

</docs>