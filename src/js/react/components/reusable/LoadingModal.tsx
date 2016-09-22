import * as React from 'react';
//TODO: to be the most effective, this should be exported as a dedicated library and transpiled with nativejsx
//FIXME: ReactElement fits well with current project compilation process; use nativejsx instead

export class LoadingModal extends React.Component<{}, {}> {
    private containerStyle: React.CSSProperties = {
        height: '100%',
        display: 'table',
        width: '100%',
        padding: 0
    }

    private rowStyle: React.CSSProperties = {
        height: '100%',
        display: 'table-cell',
        verticalAlign: 'middle'
    }

    render(): React.ReactElement<any> {
        return (
            <div class="modal" id="loading-modal" tabindex="-1" role="dialog">
                <div style={ this.containerStyle }>
                    <div style={ this.rowStyle }>
                        <div class="span3 text-center" 
                             style={{ float: 'none', margin: '0 auto' }}>
                                <div id="msg" class="text-center">
                                        <div class="spinner"></div>
                                        <h3>Please wait.  ${this.getRandomLoadingMsg()}</h3>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    private getRandomLoadingMsg(): string {
        const max = LOADING_MESSAGES.length - 1;
        const min = 0;
        const idx = Math.floor(
            Math.random() * (max - min + 1)) + min;
        return LOADING_MESSAGES[idx];
    }
}

//http://stackoverflow.hewgill.com/questions/182/112.html
const LOADING_MESSAGES = [
    '640K ought to be enough for anybody...',
    'The bits are breeding...',
    'Checking the gravitational constant in your locale...',
    'While the satellite moves into position...',
    'The bits are flowing slowly today...',
    'Measuring the cable length to fetch your data...',
    'Waiting for the system admin to hit enter...',
    'Caching internet locally...',
    'Cybernet loading self awareness...',
    'Reticulating splines...',

]

// <script type="text/javascript">
//         $('#loading-modal').modal('show');
        
//         $(window).load(function(){
//                 $('#loading-modal').modal('hide');
//         }); 
// </script>