/**
 * 对一个文件的增删改差功能实现
 */
var File = function(path1) {
	var path = path1;
	var fs = nodeRequire("fs");
	var scope = 10;
	this.create = function(data) {
		data = data || '';
		fs.writeFile(path, data, function(err) {
			if (err) {
				return console.error(err);
			}
			console.log("文件创建成功！");
		});
	};
	this.del = function() {
		fs.unlink(path, function(err) {
			if (err) {
				return console.error(err);
			}
			console.log("文件删除成功！");
		});
	};
	this.change = function(origin, repl) {
		var data = this.find();
		// console.log(data.toString());
		data = data.replace(origin, repl);
		this.create(data);
	};
	this.find = function(key) {
		if (!key) {
			return fs.readFileSync(path).toString();
		} else {
			var data = fs.readFileSync(path).toString();
			var pos = data.indexOf(key);
			var tb = pos - scope;
			var te = pos + scope;
			var begin = tb > -1 ? tb : 0;
			var end = te < data.length ? te : (data.length - 1);
			return data.substring(begin, end);
		}
	};
	this.copy = function(dest) {
		var data = this.find();
		// console.log("copy的数据"+data);
		console.log(dest)
		var ff = new File(dest);
		ff.create(data);
	};
	this.rename = function(newName) {
		fs.rename(path, newName, function(err) {
			if (err) {
				throw err;
			}
			console.log('修改名称成功');
		})
	};
}
function copyFolder(srcFolder,destFolder) {
	var fs = nodeRequire('fs'), stat = fs.stat;

	/*
	 * 复制目录中的所有文件包括子目录 @param{ String } 需要复制的目录 @param{ String } 复制到指定的目录
	 */
	var copy = function(src, dst) {
		// 读取目录中的所有文件/目录
		fs.readdir(src,
				function(err, paths) {
					if (err) {
						throw err;
					}
					paths
							.forEach(function(path) {
								var _src = src + '/' + path, _dst = dst + '/'
										+ path, readable, writable;
								stat(_src, function(err, st) {
									if (err) {
										throw err;
									}
									// 判断是否为文件
									if (st.isFile()) {
										// 创建读取流
										readable = fs.createReadStream(_src);
										// 创建写入流
										writable = fs.createWriteStream(_dst);
										// 通过管道来传输流
										readable.pipe(writable);
									}
									// 如果是目录则递归调用自身
									else if (st.isDirectory()) {
										exists(_src, _dst, copy);
									}
								});
							});
				});
	};
	// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
	var exists = function(src, dst, callback) {
		fs.exists(dst, function(exists) {
			// 已存在
			if (exists) {
				callback(src, dst);
			}
			// 不存在
			else {
				fs.mkdir(dst, function() {
					callback(src, dst);
				});
			}
		});
	};
	// 复制目录srcFolder,destFolder
	exists(srcFolder, destFolder, copy);
}
