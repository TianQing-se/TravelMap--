# TravelMap

TravelMap 是一款 Windows 桌面旅行记录地图应用，基于 Electron。可在地图上记录地点、添加笔记和照片，并导入或导出记录。

## 安装

前往 [GitHub Releases](https://github.com/TianQing-se/TravelMap--/releases) 下载唯一的 `TravelMap-Setup-版本号-x64.exe`。运行这一个安装包即可安装完整程序；不需要另外下载源码、ZIP、Node.js 或其他文件。安装向导可选择安装位置和桌面快捷方式。

安装包未签名时，Windows 可能显示未知发行者提示。地图需要联网。

## 地图与搜索

- 中国地图使用高德底图；全球地图使用 OpenStreetMap。
- 地点搜索需要用户自行申请并配置高德「Web 服务」Key。没有 Key 时仍可浏览地图并记录旅行。
- 不要把个人 Key 提交到源码仓库。曾经公开过的 Key 应在高德控制台撤销。
- OpenStreetMap 瓦片遵守[使用政策](https://operations.osmfoundation.org/policies/tiles/)，并保留地图署名。

## 数据保存

在应用内选择数据文件夹后，记录和照片保存在该目录。没有选择时，数据保存在当前 Windows 用户的应用本地存储中。请定期导出或备份，卸载、清理应用数据或更换设备可能影响本地数据。

## 从源码运行和打包

需要安装 Node.js：

```powershell
npm install
npm start
npm run dist
```

Windows x64 单文件安装程序生成在 `dist/TravelMap-Setup-版本号-x64.exe`。源码仓库忽略该目录；发布时只需将这个安装程序作为 GitHub Release 附件上传。不要上传个人照片、旅行数据或本地配置。

## 许可证

本项目使用 MIT License，见 [LICENSE](LICENSE)。地图数据和第三方服务各自遵循其许可与服务条款。
