"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
var fs = require("node:fs");
var ImageElement = /** @class */ (function () {
    function ImageElement(imgPath) {
        this.imgPath = imgPath;
    }
    ImageElement.prototype.render = function () {
        return "\n\n[Image: ".concat(this.imgPath, "]\n\n");
    };
    return ImageElement;
}());
var TextElement = /** @class */ (function () {
    function TextElement(text) {
        this.text = text;
    }
    TextElement.prototype.render = function () {
        return this.text;
    };
    return TextElement;
}());
var NewLineElement = /** @class */ (function () {
    function NewLineElement() {
    }
    NewLineElement.prototype.render = function () {
        return "\n";
    };
    return NewLineElement;
}());
var TabSpaceElement = /** @class */ (function () {
    function TabSpaceElement() {
    }
    TabSpaceElement.prototype.render = function () {
        return '\t';
    };
    return TabSpaceElement;
}());
var Persistant_Storage = /** @class */ (function () {
    function Persistant_Storage() {
        this.storage_object = null;
    }
    Persistant_Storage.prototype.add_storage_object = function (object) {
        this.storage_object = object;
    };
    Persistant_Storage.prototype.save = function () {
        var _a;
        (_a = this.storage_object) === null || _a === void 0 ? void 0 : _a.save();
    };
    return Persistant_Storage;
}());
var DB_Storage = /** @class */ (function () {
    function DB_Storage(storage_data) {
        this.data = '';
        this.data = storage_data;
    }
    DB_Storage.prototype.save = function () {
        var saved_data = fs.readFileSync('./google.txt', 'utf-8');
        console.log(saved_data);
    };
    return DB_Storage;
}());
var File_Storage = /** @class */ (function () {
    function File_Storage(file_data) {
        this.data = '';
        this.data = file_data;
    }
    File_Storage.prototype.save = function () {
        try {
            fs.writeFileSync('google.txt', this.data, 'utf-8');
            console.log('file saved to [google.txt]');
        }
        catch (err) {
            console.log('error is', err);
        }
    };
    return File_Storage;
}());
var Document = /** @class */ (function () {
    function Document() {
        this.DocumentElements = [];
    }
    Document.prototype.addElement = function (DocumentElement) {
        this.DocumentElements.push(DocumentElement);
    };
    Document.prototype.render = function () {
        return this.DocumentElements.map(function (element) { return element.render(); }).join('');
    };
    return Document;
}());
exports.Document = Document;
var Document_Editor = /** @class */ (function () {
    function Document_Editor(document, persistant_storage) {
        this.rendered_document = '';
        this.document = document;
        this.persistant_storage = persistant_storage;
    }
    Document_Editor.prototype.addText = function (data) {
        this.document.addElement(new TextElement(data));
    };
    Document_Editor.prototype.addLine = function () {
        this.document.addElement(new NewLineElement());
    };
    Document_Editor.prototype.addSpace = function () {
        this.document.addElement(new TabSpaceElement());
    };
    Document_Editor.prototype.addImage = function (path) {
        this.document.addElement(new ImageElement(path));
    };
    Document_Editor.prototype.renderDocument = function () {
        this.rendered_document = this.document.render();
    };
    Document_Editor.prototype.save_to_file = function () {
        this.persistant_storage.add_storage_object(new File_Storage(this.rendered_document));
        this.persistant_storage.save();
    };
    Document_Editor.prototype.save_to_db = function () {
        this.persistant_storage.add_storage_object(new DB_Storage(this.rendered_document));
        this.persistant_storage.save();
    };
    return Document_Editor;
}());
var document = new Document();
var persistant_storage = new Persistant_Storage();
var client = new Document_Editor(document, persistant_storage);
client.addText('This is first line. ');
client.addText('This is second line.');
client.addLine();
client.addText('This is third line.');
client.addImage('./graph.PNG');
client.addText('This is fourth line.');
client.addSpace();
client.addText('This is fifth line.');
client.renderDocument();
client.save_to_file();
client.save_to_db();
