///<reference path='all.d.ts' />

declare var FILE_APPEND: number;
declare var FILE_BINARY: number;
declare var FILE_IGNORE_NEW_LINES: number;
declare var FILE_NO_DEFAULT_CONTEXT: number;
declare var FILE_SKIP_EMPTY_LINES: number;
declare var FILE_USE_INCLUDE_PATH: number;

declare var GLOB_AVAILABLE_FLAGS: number;
declare var GLOB_BRACE: number;
declare var GLOB_MARK: number;
declare var GLOB_NOCHECK: number;
declare var GLOB_NOESCAPE: number;
declare var GLOB_NOSORT: number;
declare var GLOB_ONLYDIR: number;

declare var LOCK_EX: number;
declare var LOCK_NB: number;
declare var LOCK_SH: number;
declare var LOCK_UN: number;

declare var PATHINFO_BASENAME: number;
declare var PATHINFO_DIRNAME: number;
declare var PATHINFO_EXTENSION: number;
declare var PATHINFO_FILENAME: number;

declare var SEEK_CUR: number;
declare var SEEK_END: number;
declare var SEEK_SET: number;

declare function basename(path: string, suffix?: string): string;
declare function chgrp(filename: string, group: string): bool;
declare function chgrp(filename: string, group: number): bool;
declare function chmod(filename: string, mode: number): bool;
declare function chown(filename: string, user: string): bool;
declare function chown(filename: string, user: number): bool;
declare function clearstatcache(clear_realpath_cache?: bool, filename?: string);
declare function copy(source: string, dest: string, context?: Pct.PhpResource): bool;
declare function dirname(path: string): string;
declare function disk_free_space(directory: string): number;
declare function disk_total_space(directory: string): number;
declare function fclose(handle: Pct.PhpResource): bool;
declare function feof(handle: Pct.PhpResource): bool;
declare function fflush(handle: Pct.PhpResource): bool;
declare function fgetc(handle: Pct.PhpResource): string;
declare function fgetcsv(handle: Pct.PhpResource, length?: number, delimter?: string, enclosure?: string, escape?: string): any[];
declare function fgets(handle: Pct.PhpResource, length?: number): string;
declare function fgetss(handle: Pct.PhpResource, length?: number, allowable_tags?: string): string;
declare function file(filename: string, flags?: number, context?: Pct.PhpResource): string[];
declare function file_exists(filename: string): bool;
declare function file_get_contents(filename: string, use_include_path?: bool, context?: Pct.PhpResource, offset?: number, maxlen?: number): string;
declare function file_put_contents(filename: string, data: string, flags?: number, context?: Pct.PhpResource): number;
declare function file_put_contents(filename: string, data: any[], flags?: number, context?: Pct.PhpResource): number;
declare function file_put_contents(filename: string, data: Pct.PhpResource, flags?: number, context?: Pct.PhpResource): number;
declare function fileatime(filename: string): number;
declare function filectime(filename: string): number;
declare function filegroup(filename: string): number;
declare function fileinode(filename: string): number;
declare function filemtime(filename: string): number;
declare function fileowner(filename: string): number;
declare function fileperms(filename: string): number;
declare function filesize(filename: string): number;
declare function filetype(filename: string): string;
declare function flock(handle: Pct.PhpResource, operation: number, $wouldblock?: number): bool;
declare function fnmatch(pattern: string, string_: string, flags?: number): bool;
declare function fopen(filename: string, mode: string, use_include_path?: bool, context?: Pct.PhpResource): Pct.PhpResource;
declare function fpassthru(handle: Pct.PhpResource): number;
declare function fputcsv(handle: Pct.PhpResource, fields: any[], delimiter?: string, enclosure?: string): number;
declare function fread(handle: Pct.PhpResource, length: number): string;
declare function fscanf(handle: Pct.PhpResource, format: string): any[]; //NOTE: auto-assignment not available
declare function fseek(handle: Pct.PhpResource, offset: number, whence?: number): number;
declare function fstat(handle: Pct.PhpResource): Pct.PhpAssocArray;
declare function ftell(handle: Pct.PhpResource): number;
declare function ftruncate(handle: Pct.PhpResource, size: number): bool;
declare function fwrite(handle: Pct.PhpResource, string_: string, length?: number): number;
declare function glob(pattern: string, flags?: number): string[];
declare function is_dir(filename: string): bool;
declare function is_executable(filename: string): bool;
declare function is_file(filename: string): bool;
declare function is_link(filename: string): bool;
declare function is_readable(filename: string): bool;
declare function is_uploaded_file(filename: string): bool;
declare function is_writable(filename: string): bool;
declare function lchgrp(filename: string, group: string): bool;
declare function lchgrp(filename: string, group: number): bool;
declare function lchown(filename: string, user: string): bool;
declare function lchown(filename: string, user: number): bool;
declare function link(target: string, link: string): bool;
declare function linkinfo(path: string): number;
declare function lstat(filename: string): Pct.PhpAssocArray;
declare function mkdir(pathname: string, mode?: number, recursive?: bool, context?: Pct.PhpResource): bool;
declare function move_uploaded_file(filename: string, destination: string): bool;
declare function parse_ini_file(filename: string, process_sections?: bool, scanner_mode?: number): Pct.PhpAssocArray;
declare function parse_ini_string(ini: string, process_sections?: bool, scanner_mode?: number): Pct.PhpAssocArray;
declare function pathinfo(path: string): Pct.PhpAssocArray;
declare function pathinfo(path: string, options: number): any;
declare function pclose(handle: Pct.PhpResource): number;
declare function popen(command: string, mode: string): Pct.PhpResource;
declare function readfile(filename: string, use_include_path?: bool, context?: Pct.PhpResource): number;
declare function readlink(path: string): string;
declare function realpath(path: string): string;
declare function realpath_cache_get(): Pct.PhpAssocArray;
declare function realpath_cache_size(): number;
declare function rename(oldname: string, newname: string, context?: Pct.PhpResource): bool;
declare function rewind(handle: Pct.PhpResource): bool;
declare function rmdir(dirname: string, context?: Pct.PhpResource): bool;
declare function stat(filename: string): Pct.PhpAssocArray;
declare function symlink(target: string, link: string): bool;
declare function tempnam(dir: string, prefix: string): string;
declare function tmpfile(): Pct.PhpResource;
declare function touch(filename: string, time?: number, atime?: number): bool;
declare function umask(umask?: number): number;
declare function unlink(filename: string, context?: Pct.PhpResource): bool;