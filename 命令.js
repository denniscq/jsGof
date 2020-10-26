/**
 * 命令
 */

var Refresh = function () {

}

Refresh.prototype.action = function () {
    console.log('refresh')
}

var Add = function () {

}

Add.prototype.action = function () {
    console.log('add')
}

var Delete = function () {

}

Delete.prototype.action = function () {
    console.log('delete')
}

var RefreshCommand = function (receiver) {
    return {
        name: 'refresh command',
        excute () {
            receiver.action()
        }
    }
}

var AddCommand = function (receiver) {
    return {
        name: 'add command',
        execute () {
            receiver.action()
        }
    }
}

var DeleteCommand = function (receiver) {
    return {
        name: 'delete command',
        execute () {
            return receiver.action()
        }
    }
}

var SetCommand = function (btn, command) {
    console.log(command)
    btn.addEventListener('click', function () {
        command.execute()
    })
}

var refreshCommand = RefreshCommand(new Refresh())
var addCommand = AddCommand(new Add())
var deleteCommand = DeleteCommand(new Delete())

SetCommand(refreshButton, refreshCommand)
SetCommand(addBtn, addCommand)
SetCommand(deleteBtn, deleteCommand)


/**
 * 多命令
 */
var macioCommand = (function () {
    var commandPool = []
    return {
        add (command) {
            if (commandPool.includes(command)) {
                throw new Error('已存在')
            }

            commandPool.push(command)
        },
        execute () {
            for (var command of commandPool) {
                command.execute()
            }
        }
    }
})()

macioCommand.add(refreshCommand)
macioCommand.add(addCommand)
macioCommand.add(deleteCommand)
macioCommand.execute()