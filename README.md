# -helloworld
微信小程序helloworld
根据慕课网连胜老师的微信小程序学习记录；
测试环境的http请求是：


@RestController
@RequestMapping(value="/a")
public class UserController {
	@RequestMapping(value="/getsuccess/require",method=RequestMethod.GET)
//	@ResponseStatus(code=HttpStatus.UNAUTHORIZED)//401未授权的状态码
	@ResponseBody
	public List<WxResult2> getsuccess(HttpServletRequest request,HttpServletResponse response) throws IOException{
	List<WxResult2> t=new ArrayList<WxResult2>();
	      t.add(new WxResult2("/img/pro_01.jpg","贷款标题111","贷款内容1贷款内容贷款内容贷款内容贷款内容贷款内容"));
	      t.add(new WxResult2("/img/pro_02.jpg","贷款标题2222","贷款内容2贷款内容贷款内容贷款内容贷款内容贷款内容"));
	      t.add(new WxResult2("/img/pro_03.jpg","贷款标题3333","贷款内容3贷款内容贷款内容贷款内容贷款内容贷款内容"));
	      
	 return t;	
	}
	.....
	
	
		public class WxResult2 {
		@ApiModelProperty(value = "图片路径")
		private String logo;
		@ApiModelProperty(value = "内容标题")
		private String title;
		@ApiModelProperty(value = "内容描述")
		private String desc;