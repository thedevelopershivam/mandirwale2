config: {
    transitional: {
        silentJSONParsing: true,
            forcedJSONParsing: true,
                clarifyTimeoutError: false
    },
    adapter: ['xhr', 'http'],
        transformRequest: [[Function: transformRequest]],
            transformResponse: [[Function: transformResponse]],
                timeout: 0,
                    xsrfCookieName: 'XSRF-TOKEN',
                        xsrfHeaderName: 'X-XSRF-TOKEN',
                            maxContentLength: -1,
                                maxBodyLength: -1,
                                    env: { FormData: [Function], Blob: [class Blob] },
    validateStatus: [Function: validateStatus],
        headers: Object[AxiosHeaders] {
        Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA2ODc2MTIxfQ.z73gj0Rxdvo0CCY4BnJndjBTi3V4itrwepTHguEyd7w',
                    'User-Agent': 'axios/1.6.7',
                        'Content-Length': '159',
                            'Accept-Encoding': 'gzip, compress, deflate, br'
    },
    baseURL: 'http://localhost:8000/api/v1/admin',
        method: 'post',
            url: 'http://localhost:8000/api/v1/admin/create-category',
                data: '{"category":"my name is shivam","userId":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA2ODc2MTIxfQ.z73gj0Rxdvo0CCY4BnJndjBTi3V4itrwepTHguEyd7w"}'
},
request: <ref * 1 > ClientRequest {
    _events: [Object: null prototype] {
        abort: [Function(anonymous)],
            aborted: [Function(anonymous)],
                connect: [Function(anonymous)],
                    error: [Function(anonymous)],
                        socket: [Function(anonymous)],
                            timeout: [Function(anonymous)],
                                finish: [Function: requestOnFinish]
    },
    _eventsCount: 7,
        _maxListeners: undefined,
            outputData: [],
                outputSize: 0,
                    writable: true,
                        destroyed: true,
                            _last: false,
                                chunkedEncoding: false,
                                    shouldKeepAlive: true,
                                        maxRequestsOnConnectionReached: false,
                                            _defaultKeepAlive: true,
                                                useChunkedEncodingByDefault: true,
                                                    sendDate: false,
                                                        _removedConnection: false,
                                                            _removedContLen: false,
                                                                _removedTE: false,
                                                                    strictContentLength: false,
                                                                        _contentLength: '159',
                                                                            _hasBody: true,
                                                                                _trailer: '',
                                                                                    finished: true,
                                                                                        _headerSent: true,
                                                                                            _closed: true,
                                                                                                socket: Socket {
        connecting: false,
            _hadError: false,
                _parent: null,
                    _host: 'localhost',
                        _closeAfterHandlingError: false,
                            _readableState: [ReadableState],
                                _events: [Object: null prototype],
                                    _eventsCount: 6,
                                        _maxListeners: undefined,
                                            _writableState: [WritableState],
                                                allowHalfOpen: false,
                                                    _sockname: null,
                                                        _pendingData: null,
                                                            _pendingEncoding: '',
                                                                server: null,
                                                                    _server: null,
                                                                        timeout: 5000,
                                                                            parser: null,
                                                                                _httpMessage: null,
                                                                                    autoSelectFamilyAttemptedAddresses: [Array],
                                                                                        [Symbol(async_id_symbol)]: -1,
                                                                                            [Symbol(kHandle)]: [TCP],
                                                                                                [Symbol(lastWriteQueueSize)]: 0,
                                                                                                    [Symbol(timeout)]: Timeout {
            _idleTimeout: 5000,
                _idlePrev: [TimersList],
                    _idleNext: [TimersList],
                        _idleStart: 7951634,
                            _onTimeout: [Function: bound],
                                _timerArgs: undefined,
                                    _repeat: null,
                                        _destroyed: false,
                                            [Symbol(refed)]: false,
                                                [Symbol(kHasPrimitive)]: false,
                                                    [Symbol(asyncId)]: 587372,
                                                        [Symbol(triggerId)]: 587370,
                                                            [Symbol(kResourceStore)]: undefined,
                                                                [Symbol(kResourceStore)]: [Object],
                                                                    [Symbol(kResourceStore)]: [Object],
                                                                        [Symbol(kResourceStore)]: undefined,
                                                                            [Symbol(kResourceStore)]: undefined,
                                                                                [Symbol(kResourceStore)]: [Object],
                                                                                    [Symbol(kResourceStore)]: undefined
        },
        [Symbol(kBuffer)]: null,
            [Symbol(kBufferCb)]: null,
                [Symbol(kBufferGen)]: null,
                    [Symbol(kCapture)]: false,
                        [Symbol(kSetNoDelay)]: true,
                            [Symbol(kSetKeepAlive)]: true,
                                [Symbol(kSetKeepAliveInitialDelay)]: 1,
                                    [Symbol(kBytesRead)]: 0,
                                        [Symbol(kBytesWritten)]: 0
    },
    _header: 'POST /api/v1/admin/create-category HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'Content-Type: application/json\r\n' +
        'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA2ODc2MTIxfQ.z73gj0Rxdvo0CCY4BnJndjBTi3V4itrwepTHguEyd7w\r\n' +
        'User-Agent: axios/1.6.7\r\n' +
        'Content-Length: 159\r\n' +
        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
        'Host: localhost:8000\r\n' +
        'Connection: keep-alive\r\n' +
        '\r\n',
        _keepAliveTimeout: 0,
            _onPendingData: [Function: nop],
                agent: Agent {
        _events: [Object: null prototype],
            _eventsCount: 2,
                _maxListeners: undefined,
                    defaultPort: 80,
                        protocol: 'http:',
                            options: [Object: null prototype],
                                requests: [Object: null prototype] { },
        sockets: [Object: null prototype] { },
        freeSockets: [Object: null prototype],
            keepAliveMsecs: 1000,
                keepAlive: true,
                    maxSockets: Infinity,
                        maxFreeSockets: 256,
                            scheduling: 'lifo',
                                maxTotalSockets: Infinity,
                                    totalSocketCount: 1,
                                        [Symbol(kCapture)]: false
    },
    socketPath: undefined,
        method: 'POST',
            maxHeaderSize: undefined,
                insecureHTTPParser: undefined,
                    joinDuplicateHeaders: undefined,
                        path: '/api/v1/admin/create-category',
                            _ended: true,
                                res: IncomingMessage {
        _readableState: [ReadableState],
            _events: [Object: null prototype],
                _eventsCount: 4,
                    _maxListeners: undefined,
                        socket: null,
                            httpVersionMajor: 1,
                                httpVersionMinor: 1,
                                    httpVersion: '1.1',
                                        complete: true,
                                            rawHeaders: [Array],
                                                rawTrailers: [],
                                                    joinDuplicateHeaders: undefined,
                                                        aborted: false,
                                                            upgrade: false,
                                                                url: '',
                                                                    method: null,
                                                                        statusCode: 500,
                                                                            statusMessage: 'Internal Server Error',
                                                                                client: [Socket],
                                                                                    _consuming: false,
                                                                                        _dumped: false,
                                                                                            req: [Circular * 1],
                                                                                                responseUrl: 'http://localhost:8000/api/v1/admin/create-category',
                                                                                                    redirects: [],
                                                                                                        [Symbol(kCapture)]: false,
                                                                                                            [Symbol(kHeaders)]: [Object],
                                                                                                                [Symbol(kHeadersCount)]: 22,
                                                                                                                    [Symbol(kTrailers)]: null,
                                                                                                                        [Symbol(kTrailersCount)]: 0
    },
    aborted: false,
        timeoutCb: null,
            upgradeOrConnect: false,
                parser: null,
                    maxHeadersCount: null,
                        reusedSocket: false,
                            host: 'localhost',
                                protocol: 'http:',
                                    _redirectable: Writable {
        _writableState: [WritableState],
            _events: [Object: null prototype],
                _eventsCount: 3,
                    _maxListeners: undefined,
                        _options: [Object],
                            _ended: true,
                                _ending: true,
                                    _redirectCount: 0,
                                        _redirects: [],
                                            _requestBodyLength: 159,
                                                _requestBodyBuffers: [],
                                                    _onNativeResponse: [Function(anonymous)],
                                                        _currentRequest: [Circular * 1],
                                                            _currentUrl: 'http://localhost:8000/api/v1/admin/create-category',
                                                                [Symbol(kCapture)]: false
    },
    [Symbol(kCapture)]: false,
        [Symbol(kBytesWritten)]: 0,
            [Symbol(kNeedDrain)]: false,
                [Symbol(corked)]: 0,
                    [Symbol(kOutHeaders)]: [Object: null prototype] {
        accept: [Array],
            'content-type': [Array],
                authorization: [Array],
                    'user-agent': [Array],
                        'content-length': [Array],
                            'accept-encoding': [Array],
                                host: [Array]
    },
    [Symbol(errored)]: null,
        [Symbol(kHighWaterMark)]: 16384,
            [Symbol(kRejectNonStandardBodyWrites)]: false,
                [Symbol(kUniqueHeaders)]: null
},
response: {
    status: 500,
        statusText: 'Internal Server Error',
            headers: Object[AxiosHeaders] {
        'x-powered-by': 'Express',
            'access-control-allow-origin': '*',
                'x-ratelimit-limit': '1000',
                    'x-ratelimit-remaining': '999',
                        date: 'Sat, 03 Feb 2024 03:09:41 GMT',
                            'x-ratelimit-reset': '1706929842',
                                'content-type': 'application/json; charset=utf-8',
                                    'content-length': '1034',
                                        etag: 'W/"40a-d81GO9IxsLjoOwv1IUem15r1CZ0"',
                                            connection: 'keep-alive',
                                                'keep-alive': 'timeout=5'
    },
    config: {
        transitional: [Object],
            adapter: [Array],
                transformRequest: [Array],
                    transformResponse: [Array],
                        timeout: 0,
                            xsrfCookieName: 'XSRF-TOKEN',
                                xsrfHeaderName: 'X-XSRF-TOKEN',
                                    maxContentLength: -1,
                                        maxBodyLength: -1,
                                            env: [Object],
                                                validateStatus: [Function: validateStatus],
                                                    headers: [Object[AxiosHeaders]],
                                                        baseURL: 'http://localhost:8000/api/v1/admin',
                                                            method: 'post',
                                                                url: 'http://localhost:8000/api/v1/admin/create-category',
                                                                    data: '{"category":"my name is shivam","userId":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA2ODc2MTIxfQ.z73gj0Rxdvo0CCY4BnJndjBTi3V4itrwepTHguEyd7w"}'
    },
    request: <ref * 1 > ClientRequest {
        _events: [Object: null prototype],
            _eventsCount: 7,
                _maxListeners: undefined,
                    outputData: [],
                        outputSize: 0,
                            writable: true,
                                destroyed: true,
                                    _last: false,
                                        chunkedEncoding: false,
                                            shouldKeepAlive: true,
                                                maxRequestsOnConnectionReached: false,
                                                    _defaultKeepAlive: true,
                                                        useChunkedEncodingByDefault: true,
                                                            sendDate: false,
                                                                _removedConnection: false,
                                                                    _removedContLen: false,
                                                                        _removedTE: false,
                                                                            strictContentLength: false,
                                                                                _contentLength: '159',
                                                                                    _hasBody: true,
                                                                                        _trailer: '',
                                                                                            finished: true,
                                                                                                _headerSent: true,
                                                                                                    _closed: true,
                                                                                                        socket: [Socket],
                                                                                                            _header: 'POST /api/v1/admin/create-category HTTP/1.1\r\n' +
                                                                                                                'Accept: application/json, text/plain, */*\r\n' +
                                                                                                                'Content-Type: application/json\r\n' +
                                                                                                                'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA2ODc2MTIxfQ.z73gj0Rxdvo0CCY4BnJndjBTi3V4itrwepTHguEyd7w\r\n' +
                                                                                                                'User-Agent: axios/1.6.7\r\n' +
                                                                                                                'Content-Length: 159\r\n' +
                                                                                                                'Accept-Encoding: gzip, compress, deflate, br\r\n' +
                                                                                                                'Host: localhost:8000\r\n' +
                                                                                                                'Connection: keep-alive\r\n' +
                                                                                                                '\r\n',
                                                                                                                _keepAliveTimeout: 0,
                                                                                                                    _onPendingData: [Function: nop],
                                                                                                                        agent: [Agent],
                                                                                                                            socketPath: undefined,
                                                                                                                                method: 'POST',
                                                                                                                                    maxHeaderSize: undefined,
                                                                                                                                        insecureHTTPParser: undefined,
                                                                                                                                            joinDuplicateHeaders: undefined,
                                                                                                                                                path: '/api/v1/admin/create-category',
                                                                                                                                                    _ended: true,
                                                                                                                                                        res: [IncomingMessage],
                                                                                                                                                            aborted: false,
                                                                                                                                                                timeoutCb: null,
                                                                                                                                                                    upgradeOrConnect: false,
                                                                                                                                                                        parser: null,
                                                                                                                                                                            maxHeadersCount: null,
                                                                                                                                                                                reusedSocket: false,
                                                                                                                                                                                    host: 'localhost',
                                                                                                                                                                                        protocol: 'http:',
                                                                                                                                                                                            _redirectable: [Writable],
                                                                                                                                                                                                [Symbol(kCapture)]: false,
                                                                                                                                                                                                    [Symbol(kBytesWritten)]: 0,
                                                                                                                                                                                                        [Symbol(kNeedDrain)]: false,
                                                                                                                                                                                                            [Symbol(corked)]: 0,
                                                                                                                                                                                                                [Symbol(kOutHeaders)]: [Object: null prototype],
                                                                                                                                                                                                                    [Symbol(errored)]: null,
                                                                                                                                                                                                                        [Symbol(kHighWaterMark)]: 16384,
                                                                                                                                                                                                                            [Symbol(kRejectNonStandardBodyWrites)]: false,
                                                                                                                                                                                                                                [Symbol(kUniqueHeaders)]: null
    },
    data: { status: 'error', errors: 'Validation error', message: [Object] }
}
}