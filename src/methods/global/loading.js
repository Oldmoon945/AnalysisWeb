import $ from 'jquery'

function switchLoading(status) {
  if (status === 'show') {
    $('#htmlLoading').removeClass('NShow')
  } else {
    $('#htmlLoading').addClass('NShow')
  }
}

export { switchLoading }