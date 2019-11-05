export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: '引用'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: '加粗'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: '列表'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: '代码'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: '代码块'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: '撤销'
        },
        redo: {
          tooltip: '恢复'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: '水平线'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: '斜体'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: '序号列表'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: '段落'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: '中横线'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: '下划线'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + ' 标题'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: '修改链接'
        },
        notActive: {
          tooltip: '增加链接'
        }
      },
      window: {
        title: '编辑链接',
        form: {
          hrefLabel: '地址'
        },
        buttons: {
          close: '取消',
          remove: '删除',
          apply: '确认'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: '图片'
      },
      window: {
        title: '增加图片',
        or: '或者',
        form: {
          sourceLink: '图片地址'
        },
        buttons: {
          close: '取消',
          apply: '确认'
        }
      }
    }
  }
}
