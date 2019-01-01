<script>
export default {
  mounted () {
  }
}
</script>

<style lang="stylus">
@import "./color"

html, body, #app {
  height: 100%;
  color: #555555;
}
image {
  width: 100%;
  height: 100%;
}
.theme {
  color: theme;
}
.font-gray {
  color: fontGray;
}
.bold {
  font-weight: bold;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  line-height: 0;
  border-radius: 8px;
  color: #fff;
  &::after {
    border: none;
  }
}
input {
  background: backGray;
}
.input-placeholder {
  color: fontGray;
  font-size: 16px;
  font-weight: normal;
}
</style>
